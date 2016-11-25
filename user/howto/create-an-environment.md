---
layout: user-doc
title: Create an Environment
id: create-an-environment
---

An Environment captures your operational requirements for an instance of your Assembly. Examples of Environments are dev, qa, or prod environments. Because all environments use the same base application model, the overall effort to maintain all of the environments is minimized.

# Solution

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-transition-0215_creating-an-environment-in-oneops_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video.
</video>

To create an environment, follow these steps:


1. Go to the assembly.
2. In the Transition phase, click **create environment.**
3. Select the appropriate <a href="/user/references/#environment-profiles">environment profile</a>
4. Click **New Environment.**

    ![User Create Environment](/assets/docs/local/images/user-create-environment.png)

5. Enter the properties for the new environment.

    ![User Create Environment](/assets/docs/local/images/user-create-environment1.png)

6. Include the following:
    * Environment name that is unique to your Assembly
    * Description
    * Administrative Status from the options listed below.
        * Provision: Environment is under provisioning state
        * Active: Environment is up and serving production traffic
        * Inactive: Environment is up however doesn't serve production traffic
        * Decommission: Environment is no longer in use and can be removed.
    * Continuous Deployment: Not in use
    * DNS
        * DNS Subdomain: Makes the environment unique
        * Global DNS: If checked, creates the GLB

    >For a new environment, "Provision" is the correct status value. Other values should be used after the environment is created and functioning. This status value is used only for administrative purpose by NOC or OneOps admins to understand the state of the environment.

7. Configure the availability.
    * <a href="/user/references/#availability-modes">Availability mode</a>:
        * **Single:** Generates an environment without load balancers, clusters, etc.  
        * **Redundant:** Inserts and configures clusters, load balancers, rings, etc., depending on what the best practice is for each platform.  
        * **High-Availability:** Adds multi-provider or multi-region to a redundant environment. Availability can only be changed when creating the environment.

    ![User Create Environment](/assets/docs/local/images/user-create-environment2.png)

8. Select one or more primary and secondary <a href="/user/howto/add-a-new-cloud.html">clouds</a> from the list of available options.

    ![User Create Environment](/assets/docs/local/images/user-create-environment3.png)

    Debug should not be used by users. It is used to debug OpenStack issues.

10. To save the environment, click **Save.**

    A new Environment manifest is generated and the Environment details page is shown.

11. Review the changes, which are now a set of add Actions.
12. Click **Commit and Deploy.**

    The deployment plan is generated.

13. Review the deployment steps and then click **Deploy.**

# See Also

* To get details for your instances, check logs and health, or for controls, go to <a href="/user/references/#operations-reference">Operations</a>.

