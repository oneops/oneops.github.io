---
layout: project
title: Add a Platform
id: add-a-platform
---

To create a new Platform type so it can be used via the UI, follow the steps listed below.

For this example, JBoss is an example of a new platform. Before a pack can use JBoss, a <a href="javascript:loadContent('/documentation/developer/key-concepts/index.html');">component</a> for JBoss must be added. Since Tomcat is an application server like JBoss, we can use that as a template.

1. `cd packer/packs/platform ; cp tomcat.rb JBoss.rb`
2. Edit the JBoss.rb by changing the names and monitors accordingly.
3. <a href="javascript:loadContent('/documentation/developer/how-to/cms-sync.html');">Sync</a> to the CMS.

The following is a sample platform pack file for Tomcat:

~~~ruby
# extends genericlb pack
# genericlb extends base - where compute, storage, user, etc are modeled.
include_pack "genericlb"

name "tomcat"
description "Tomcat"
type "Platform"
category "Web Application"

environment "single", {}
environment "redundant", {}
environment "ha", {}

resource "tomcat",
  :cookbook => "tomcat",
  :design => true,
  :requires => { "constraint" => "1..1" },
  :monitors => {     
      'JvmInfo' =>  { :description => 'JvmInfo',
                  :source => '',
                  :chart => {'min'=>0, 'unit'=>''},
                  :cmd => 'check_tomcat_jvm',
                  :cmd_line => '/opt/nagios/libexec/check_tomcat.rb JvmInfo',
                  :metrics =>  {
                    'max'   => metric( :unit => 'B', :description => 'Max Allowed', :dstype => 'GAUGE'),
                    'free'   => metric( :unit => 'B', :description => 'Free', :dstype => 'GAUGE'),
                    'total'   => metric( :unit => 'B', :description => 'Allocated', :dstype => 'GAUGE'),
                    'percentUsed'  => metric( :unit => 'Percent', :description => 'Percent Memory Used', :dstype => 'GAUGE'),
                  },
                  :thresholds => {
                     'HighMemUse' => threshold('5m','avg','percentUsed',trigger('>',98,15,1),reset('<',98,5,1)),
                  }
                },
      'ThreadInfo' =>  { :description => 'ThreadInfo',
                  :source => '',
                  :chart => {'min'=>0, 'unit'=>''},
                  :cmd => 'check_tomcat_thread',
                  :cmd_line => '/opt/nagios/libexec/check_tomcat.rb ThreadInfo',
                  :metrics =>  {
                    'currentThreadsBusy'   => metric( :unit => '', :description => 'Busy Threads', :dstype => 'GAUGE'),
                    'maxThreads'   => metric( :unit => '', :description => 'Maximum Threads', :dstype => 'GAUGE'),
                    'currentThreadCount'   => metric( :unit => '', :description => 'Ready Threads', :dstype => 'GAUGE'),
                    'percentBusy'    => metric( :unit => 'Percent', :description => 'Percent Busy Threads', :dstype => 'GAUGE'),
                  },
                  :thresholds => {
                     'HighThreadUse' => threshold('5m','avg','percentBusy',trigger('>',90,5,1),reset('<',90,5,1)),
                  }
                },
      'RequestInfo' =>  { :description => 'RequestInfo',
                  :source => '',
                  :chart => {'min'=>0, 'unit'=>''},
                  :cmd => 'check_tomcat_request',
                  :cmd_line => '/opt/nagios/libexec/check_tomcat.rb RequestInfo',
                  :metrics =>  {
                    'bytesSent'   => metric( :unit => 'B/sec', :description => 'Traffic Out /sec', :dstype => 'DERIVE'),
                    'bytesReceived'   => metric( :unit => 'B/sec', :description => 'Traffic In /sec', :dstype => 'DERIVE'),
                    'requestCount'   => metric( :unit => 'reqs /sec', :description => 'Requests /sec', :dstype => 'DERIVE'),
                    'errorCount'   => metric( :unit => 'errors /sec', :description => 'Errors /sec', :dstype => 'DERIVE'),
                    'maxTime'   => metric( :unit => 'ms', :description => 'Max Time', :dstype => 'GAUGE'),
                    'processingTime'   => metric( :unit => 'ms', :description => 'Processing Time /sec', :dstype => 'DERIVE')                                                          
                  },
                  :thresholds => {
                  }
                }                                
  }

resource "build",
  :cookbook => "build",
  :design => true,
  :requires => { "constraint" => "0..*" },
  :attributes => {
    "install_dir"   => '/usr/local/build',
    "repository"    => "",
    "remote"        => 'origin',
    "revision"      => 'HEAD',
    "depth"         => 1,
    "submodules"    => 'false',
    "environment"   => '{}',
    "persist"       => '[]',
    "migration_command" => '',
    "restart_command"   => ''
  }

resource "java",
  :cookbook => "java",
  :design => true,
  :requires => {
    :constraint => "0..1",
    :help => "java programming language environment"
  },
  :attributes => {

  }

resource "vservice",
  :design => false,  
  :attributes => {
    "protocol"  => "http",
    "vport"         => 8080,
    "iport"         => 8080
  }

# depends_on
[ { :from => 'tomcat',     :to => 'compute' },
  { :from => 'build',      :to => 'library' },  
  { :from => 'tomcat',     :to => 'user'  },
  { :from => 'tomcat',     :to => 'java'  },
  { :from => 'build',      :to => 'tomcat'  },  
  { :from => 'daemon',     :to => 'build' },  
  { :from => 'build',      :to => 'download'},
  { :from => 'java',       :to => 'compute' },
  { :from => 'java',       :to => 'download'},  ].each do |link|
  relation "#{link[:from]}::depends_on::#{link[:to]}",
    :relation_name => 'DependsOn',
    :from_resource => link[:from],
    :to_resource   => link[:to],
    :attributes    => { "flex" => false, "min" => 1, "max" => 1 }
end


# managed_via
[ 'tomcat', 'build', 'java' ].each do |from|
  relation "#{from}::managed_via::compute",
    :except => [ '_default' ],
    :relation_name => 'ManagedVia',
    :from_resource => from,
    :to_resource   => 'compute',
    :attributes    => { }
end
~~~
