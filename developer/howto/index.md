---
layout: dev-doc
title: Add Monitors
id: add-monitors
---

Adding a monitor is specific to each component. These steps are very generic and only give an overview of what to do if a new monitor needs to be added to a component:

Go to the pack where you want to add the monitor.

# Add a Monitors using existing script

1. Let say we need to add the log monitor on resource. Since we already have check_logfiles script. We can use it.

~~~ruby
:monitors => {  
    'Log' => {:description => 'Log',
          :source => '',
          :chart => {'min' => 0, 'unit' => ''},
          :cmd => 'check_logfiles!logtomcat!#{cmd_options[:logfile]}!#{cmd_options[:warningpattern]}!#{cmd_options[:criticalpattern]}',
          :cmd_line => '/opt/nagios/libexec/check_logfiles   --noprotocol --tag=$ARG1$ --logfile=$ARG2$ --warningpattern="$ARG3$" --criticalpattern="$ARG4$"'
          :cmd_options => {
                'logfile' => '/var/log/tomcat6/catalina.out',
                'warningpattern' => 'WARNING',
                'criticalpattern' => 'CRITICAL'
}, :metrics => {
               'logtomcat_lines' => metric(:unit => 'lines', :description => 'Scanned Lines', :dstype => 'GAUGE'),
                   'logtomcat_warnings' => metric(:unit => 'warnings', :description => 'Warnings', :dstype => 'GAUGE'),
               'logtomcat_criticals' => metric(:unit => 'criticals', :description => 'Criticals', :dstype => 'GAUGE'),
               'logtomcat_unknowns' => metric(:unit => 'unknowns', :description => 'Unknowns', :dstype => 'GAUGE')
}, :thresholds => {
            'CriticalLogException' => threshold('15m', 'avg', 'logtomcat_criticals', trigger('>=', 1, 15, 1), reset('<', 1, 15, 1)),
           }
 },
}
~~~

# Add a Monitors , Creating a new script.
2. To create a new monitor, a new script needs to be created. This script can be placed in the **monitor** cookbook, or if it's specific to the component in question, it can be placed under the component's own cookbook.
 refer [Monitoring Component](https://github.com/oneops/oneops-admin/tree/master/lib/shared/cookbooks/monitor/files/default)

For adding to existing directories :

3. Create Directories `“template/default”` in Zookeeper OneOps pack in the zookeeper component and add your script file with the extension of `filename.extn.erb`
4. Add the following code to your add.rb `"packer/components/cookbooks/zookeeper/recipes/add.rb"`. This is used to copy your `.erb` file in the `/opt/nagios/libexec` and nagios will read from there.

~~~ruby
template "/opt/nagios/libexec/check_zk.py" do
  source "check_zk.py.erb"
  mode 0755
  owner "oneops"
  group "oneops"
end
~~~

> `check_zk.py` is the name of the script.

1. Add the monitor in the pack `"packs/platform/zookeeper.rb"`

~~~ruby
'zookeepernode' => {:description => 'ZookeeperNode',
                       :source => '',
                       :chart => {'min' => '0', 'max' => '100', 'unit' => 'Percent'},
                       :cmd => 'check_zk',
                       :cmd_line => '/opt/nagios/libexec/check_zk.py',
                       :metrics => {
                           'up' => metric(:unit => '%', :description => 'Percent Up'),
                       },
                       :thresholds => {
                           'ZookeeperProcessDown' => threshold('1m', 'avg', 'up', trigger('<', 90, 1, 1), reset('>', 90, 1, 1))
                       }
         }
LOG Format:
if [ $ec != 0 ]; then
echo "$1 down |up=0"
else
echo "$1 up |up=100"
fi
~~~

# See Also

* <a href="#add-new-chef-cookbook-pack">Add a New Chef Cookbook and Pack to OneOps</a>



<h1 class="primary" id="add-new-chef-cookbook-pack">Add a New Chef Cookbook and Pack to OneOps</h1>

# Design Considerations

Plan how you want your component to work. The following are some questions regarding design. Although there are others, hopefully these help. Always refer to existing examples like Tomcat.


* What actions will you provide? `stop`, `start`, `restart`, `attach-debugger`, others?
* If the approach is to download and install a binary, or if it is to download source and compile it, you need to decide where the install tarball is going to live. So far, OneOps has stored things in Nexus, but we are exploring other choices.
* What input will the user give, and what are the defaults for fields (for example, the download URL location of an install tarball)?
* Decide on the dependency. For example, it could be a scenario in which the user depends on the file system, which in turn, depends on the compute.
* See if you need any other features in the recipe. For example, you do if the MD5 sum should be checked after downloading a tarball.
* Will your component be managed by `/etc/init.d` or an upstart alternative? This will be in the recipe.
* Where are the log files going to be configured to go?


# Add a New Component (Cookbook) and a Pack

The existing <a href="https://github.com/oneops/circuit-oneops-1/tree/master/components/cookbooks/tomcat" target="_blank">Tomcat cookbook</a> is used as an example here.

## Create the Component and Pack

1. Edit/Create a <a href="https://github.com/oneops/circuit-oneops-1/blob/master/components/cookbooks/tomcat/metadata.rb" target="_blank">metadata.rb</a> file under your cookbook home.<br/>
2. In the metadata.rb file:
    * Define the metadata for your cookbook's attributes. Refer to the file above, as an example.
    * Define the recipe list at the bottom. (Refer to the Tomcat `metadata.rb`.)

    These recipes are shown as action buttons on the OneOps GUI when you click that component in the "Operations" phase. When clicked, OneOps calls that recipe from that cookbook. For example, start/stop/restart of Tomcat.

    > The attribute metadata is OneOps specific here. Checkout the attributes in the Tomcat cookbook metadata.rb when the cookbook will be parsed later by the rake install command. This metadata is fed to the CMS DB as a model that tells the OneOps GUI how to render these attributes on the component (cookbook) configuration page.

3. If this cookbook is not part of an existing pack, create a new OneOps pack. A pack is an application platform type definition. Example packs (or platforms) are Tomcat, MySQL, etc. For additional details, refer to the <a href="https://github.com/oneops/circuit-oneops-1/blob/master/packs/tomcat.rb" target="_blank">Tomcat pack</a>.
4. Add the following important details to this pack:
  * `Variables` These are variables that can be used while providing values for the cookbook attributes (next step). These variables are shown in the GUI and their values can be edited by the end user
  * `Resource` Define resources. There should be one resource per cookbook. You can set values for the attributes here by substituting the variables. Another synonym for resource is "component". These resources are shown as a list on the platform details page. Users can click them and edit attributes if needed.
  * `Dependency` Define the dependency among the resources you defined above. This is called "depends_on". This enables OneOps to create the deployment sequence plan.
  * `ManagedVia` Define the manage-via relation. See the Tomcat pack for an example.


## Test the Cookbook and Pack

Now you are ready to test your cookbook and pack. You need to push your model (cookbook and pack metadata) to the CMS DB. This is done by calling a knife plugin developed by OneOps. This plugin can parse the cookbook metadata and pack and push it to CMS. Follow these steps:

1. Export the CMSAPI env variable to point to the CMS instance that you want to sync to. For example: `export CMSAPI=http://cms.<your-server>:8080/`. This pairs well with the shared UI on `https://web.dev.<your-server>.com/` cd to the packer directory.  
2. Do a Git pull to make sure you have pulled all the latest changes.
3. Invoke the knife plugin by executing: `$ circuit install`.

    > BE CARFEUL when you use this because you load everything and that impacts others that use the same dev server. This takes some time and pushes all the metadata as CI (configuration item) objects to the CMS. In general, if you are only working on a single cookbook/pack, use the individual commands, not ALL. Remember that if you are using a shared dev-packer CMS backend, that modifying model/packs from one dev environment will affect anybody using that dev-packer environment as a backend.

4. Install a single platform and its cookbook 'cd <pack-directory>':
    * To load a single cookbook as a model definition: `$ bundle exec knife model sync <cookbook-name>`
    * To load a platform: `$ bundle exec knife pack sync platform/<platform-name> --reload`

    OR

5. Install all cookbooks and packs in separate commands.

    > BE CAREFUL when you use this because you impact others that use the same dev server!
    * To reload ALL cookbooks from the packer repo: `$ circuit model`
    * To load ALL packs: `$ circuit packs`

6. We cache the metadata model in the UI so any metadata model changes must be followed by cache clear:

    ~~~bash
    $ curl http://cms.<your-server>.com:8080/transistor/rest/cache/md/clear
    ~~~

7. Test the component configurations in the OneOps GUI 'https://web.dev.<your-server>.com/'  
8. To make sure that your platform and cookbook are working.
9. Set up a local inductor.
10. Do a deployment.
11. Commit the pack code, the cookbook code, and the icons files.

# See Also

Need a jump start on Ruby coding? Just enough <a href="http://docs.opscode.com/just_enough_ruby_for_chef.html" target="_blank">Ruby for chef</a>.



<h1 class="primary" id="add-new-platform-pack">Add a New Platform Pack</h1>

* Include_pack (inherit)
* Name, desc, category
* Resources: named
* Components
* Relations 
    * depends_on 
    * managed_via


![Add new platform pack](/assets/docs/local/images/add-new-platform-pack.png)



<h1 class="primary" id="add-a-platform">Add a Platform</h1>

To create a new Platform type so it can be used via the UI, follow the steps listed below.

For this example, JBoss is an example of a new platform. Before a pack can use JBoss, a <a href="/developer/key-concepts/">component</a> for JBoss must be added. Since Tomcat is an application server like JBoss, we can use that as a template.

1. `cd packer/packs/platform ; cp tomcat.rb JBoss.rb`
2. Edit the JBoss.rb by changing the names and monitors accordingly.
3. <a href="#cms-sync">Sync</a> to the CMS.

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



<h1 class="primary" id="cms-sync">CMS Sync</h1>

To update the CMS database with new component metadata and/or platform management packs, we extended Chef's knife to load (model sync) the files in the directory to the database.

This sync is shown in the Preload Configuration section below:

![Platform create flow](/assets/docs/local/images/platform-create-flow.png)

~~~bash
# need to be in the root packer directory

# full sync components, platforms, services, etc
bundle exec rake install

# model only - components and relationships
util/reload_model
-or-
knife model sync -a
knife model sync -a -r

# components only
knife model sync -a

# relations only
knife model sync -a -r

# single pack
util/reload_pack <packname>
-or-
bundle exec knife pack upload platform/<packname> --reload

# providers only
bundle exec rake providers
~~~



<h1 class="primary" id="create-a-custom-payload">Create a Custom Payload</h1>

To get configuration data from other parts of your assembly, you can add a custom payload definition to the resource in a circuit.

Prerequisite: You must understand the bom, manifest, and base models.

Let's start with an sample payload that gets all the computes in an environment for the Cassandra component.

1. Go to a bom.oneops.1.Cassandra component.
2. Go up to the manifest component (manifest.oneops.1.Cassandra).
3. Use the DependsOn relation to get to the manifest compute.
4. To get the bom instances, use the base.RealizedAs relation.   

    ~~~
    'computes' => {
      'description' => 'computes',
      'definition' => '{
        "returnObject": false,
        "returnRelation": false,
        "relationName": "base.RealizedAs",
        "direction": "to",
        "targetClassName": "manifest.oneops.1.Cassandra",
        "relations": [
          { "returnObject": false,
          "returnRelation": false,
          "relationName": "manifest.DependsOn",
          "direction": "from",
          "targetClassName": "manifest.oneops.1.Compute",
          "relations": [
            { "returnObject": true,
            "returnRelation": false,
            "relationName": "base.RealizedAs",
            "direction": "from",
            "targetClassName": "bom.oneops.1.Compute"
            }
          ]
          }
        ]
      }'  
    }  
    ~~~

5. Use the cms-admin tool which is part of the CMS to visualize / verify the relation names, directions, and class names.

>
  * You can browse cms-admin using a "/" nspath starting point:
http://localhost:8080/cms-admin/ci.do?nspath=%2F&classname=&ciname=&Search=Search
  * You can use the instance /ci id in the url of OneOps ui to go directly to the ci:
http://localhost:8080/cms-admin/ci.do?id=482717

There are many examples of payloads in the circuits.  Most likely there is an existing payload you can reuse by changing a few classes.



<h1 class="primary" id="create-parameterized-component-actions">Create Parameterized Component Actions</h1>

# Summary
As a cookbook or circuit developer, if you want to accept user inputs before executing any component actions and use those input values inside the action recipe, you need to specify those details in the `metadata.rb` of that cookbook as mentioned in the details below.

# Details
Let's say you need to add an action (or modify an existing action) to accept a text input called "path" and some more inputs from the user. You need to modify the metadata.rb of that cookbook and add "args" metadata to the action as shown below:

~~~ruby
metadata.rb
recipe "restart", "restart application"
recipe "stop", "stop application"

recipe 'run-script',
        :description => 'Run a script',
        :args => {
  "path" => {
    "name": "path",
    "description": "Path to a file",
    "defaultValue": "",
    "required": true,
    "dataType": "string"
  }
}
# Right now, only string (text field) is supported on gui. Rest of the types will be supported soon and this document will be updated then
~~~

* The content of the "args" can be either Ruby hash or a plain JSON.

* After you sync this new `metadata.rb` using the knife plugin, the end user sees the GUI dialog box to enter those inputs before starting the procedure execution.

* In your recipe code, you can use the "arglist" field from the json "node" payload to use the input values.

* Example take a look at volume [component](https://github.com/oneops/circuit-oneops-1/blob/master/components/cookbooks/volume/metadata.rb) and look for `log-grep-count`



<h1 class="primary" id="override-platform-attributes">Override Platform Attributes</h1>

You can override the platform attributes like auto-replace or auto-scale at individual circuit (pack) level.

Edit your circuit and add below hash to the circuit

``` ruby
platform :attributes => {
                "replace_after_minutes" => 60,
                "replace_after_repairs" => 3
        }
```
Apart from the above attributes, you can also configure any other platform attribute to have default values.

For the full set of attributes, refer to the platform metadata.rb:

<https://github.com/oneops/oneops-admin/blob/master/lib/base/platform/metadata.rb>

OneOps's base circuit is going to have the Auto-Replace set to true and have the values like in above example by default.

Individual circuit owners need to override these values in their circuits if they want different configuration. If not overriden, the values are inherited from base circuit.

