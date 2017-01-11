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

3. Create Directories `“template/default”` in Zookeeper Oneops pack in the zookeeper component and add your script file with the extension of `filename.extn.erb`
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

* <a href="/developer/content-development/add-new-chef-cookbook-pack.html">Add a New Chef Cookbook and Pack to OneOps</a>
