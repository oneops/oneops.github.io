---
layout: dev-doc
title: Add a New Chef Cookbook and Pack to OneOps
id: add-new-chef-cookbook-pack
---

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
