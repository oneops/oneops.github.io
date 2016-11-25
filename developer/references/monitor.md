---
layout: dev-doc
title: Monitor
id: monitor
---

An optional monitor within a Pack Component Resource contains:

* Name, desc, optional source
* Charting defaults: For example, min/max y-axis, unit
* Nagios command name and command line to execute: `cmd` and `cmd_line`
* Metrics: name, unit, desc, dstype
* Thresholds: When to trigger events

For additional information about dstype, see [Metric Data Source Type][] in the OneOps Admin Documentation.

The following is a sample monitor definition from Tomcat's pack:

~~~ruby
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
       ...
~~~

[Metric Data Source Type]:/admin/references/metric-data-source-type.html
