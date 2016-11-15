##Ignoring this, till we add util

title: Add a New Component
id: add-a-new-component


To add a new [Component](../key-concepts/#component) Class to a model so it can be used by [Platforms,](../key-concepts/#platform) follow these steps:

In this example, we use *Jboss* as an example of a new component.

1. Clone the initial packer directory from [git@github.com:kloopz/packer.git](git@github.com:kloopz/packer.git).

    ~~~bash
    cd packer; util/new_component.rb Jboss
    ~~~

     This generates the dirs and files with common values. See the sample output in the first Note below.

    ~~~bash
    cd cookbooks/Jboss
    ~~~

2. Update <a href="javascript:loadContent('/documentation/developer/references/metadata.html');">metadata.rb</a>. You can reuse existing Jboss chef recipes and attributes by using the open source recipe, http://community.opscode.com/cookbooks/Jboss. For a list of these see the second Note below.

    ~~~bash
    cd recipes
    ~~~

3. Copy recipes from the download on the page above, or use the Git [chef-Jboss.](https://github.com/bryanwb/chef-Jboss/tree/master/recipes) The cookbook does not have a recipe named add.rb. Their default.rb does the same function.
4. Create an add.rb and update.rb that only has: include_recipe "Jboss::default". There is no delete recipe, that must be added.
5. Update relationships metadata for: `depends_on`, `deployed_to`, `escorted_by`,`managed_via`, `realized_as`, `requires`, and `watched_by`.
6. `cd ../<relationship>` and edit metadata.rb adding Jboss accordingly.
7. <a href="javascript:loadContent('/documentation/developer/how-to/cms-sync.html');">Sync</a> to CMS.
8. Add the Jboss image for the UI: kloopz-app repo `public/images/cms/Jboss.png`

> new_component.rb Jboss output:

~~~bash
##
## Creating new component: /Users/mike/oo/packer/cookbooks/Jboss
##
DIR: /Users/mike/oo/packer/cookbooks/Jboss
updating metadata.rb
updating README.md
DIR: /Users/mike/oo/packer/cookbooks/Jboss/recipes
updating add.rb
updating delete.rb
updating repair.rb
updating restart.rb
updating start.rb
updating status.rb
updating stop.rb
updating update.rb
done.
~~~

> Jboss Attributes from open source cookbook:

~~~bash
* Jboss_home -  location for Jboss
* version - version to download
* dl_url - download url  ...we can derive from the version tho, omitting
* Jboss_user - default Jboss user
~~~

# See Also

* <a href="javascript:loadContent('/documentation/developer/key-concepts/index.html');">Platforms</a> in Key Concepts
* <a href="javascript:loadContent('/documentation/developer/how-to/add-platform.html');">Add a Platform</a>

# New Component Screens

![New component screen 1](/assets/docs/local/images/new-component-screen-1.png)

metadata.rb  - 4 parts:

1. `name/desc`
2. `grouping`
3. `attrs`
4. `actions` (additional to add, update, delete)

![New component screen 2](/assets/docs/local/images/new-component-screen-2.png)
