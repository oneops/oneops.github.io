---
layout: user-doc
title: User Getting Started
id: "getting-started"
---

<div id="wizard" class="rounded">
  <div class="inner rounded">
    <ul class="steps">
      <li class="alert account alert-success">
        <span class="step-title alert-heading">Account</span>
        <ul class="tasks">
          <li class="task"> <span><a href="#create-cloud">create clouds</a></span></li>
          <li class="task"> <span><a href="#create-an-assembly">create assembly</a></span></li>
        </ul>
        <span class="step-number">1</span>
      </li>
      <li class="alert alert-info design">
        <span class="step-title alert-heading">Design</span>
        <ul class="tasks">
          <li class="task"><a href="#create-a-platform">create platform</a></li>
          <li class="task"><a href="#commit-a-design">commit design</a></li>
        </ul>
        <span class="step-number">2</span>
      </li>
      <li class="alert alert-info transition">
        <span class="step-title alert-heading">Transition</span>
        <ul class="tasks">
          <li class="task"><a href="#create-an-environment">create environment</a></li>
          <li class="task"><a href="#deploy-an-application">deploy to cloud</a></li>
        </ul>
        <span class="step-number">3</span>
      </li>
      <li class="alert alert-info operate">
        <span class="step-title alert-heading">Operate</span>
        <ul class="tasks">
          <li class="task"><a href="#view-operations">view status</a></li>
          <li class="task"><a href="#control-environment">control environment</a></li>
        </ul>
        <span class="step-number">4</span>
      </li>
    </ul>
  </div>
</div>


# Account

This section describes how to set up your account, organization, assemblies.

1. Login/Register in OneOps to access/create your Organization.
2. Not seeing your Organization? Lookup the Organization you are interested in. Ask Organization administrator to grant you access .
3. To create a new Organization? Follow these steps.


## Create Organization

1. Click profile (your user name) on the left nav bar.
2. Select **Organization** tab.
3. Select new **Organization** from the right side.
4. Enter Organization name and click save.
5. This will bootstrap an Organization with reasonable defaults which can be changed later.


## Create Cloud

>Normally administrator of the organization creates a cloud, it may require creating an
[inductor](/admin/operate/inductor.html) or adding cloud to an exiting inductor.

1. Create [Organization](#create-organization) if one does not exist.
2. Click **clouds** link on left nav bar .
3. Click **Add Cloud**  

![Getting started OneOps](/assets/docs/local/images/create-clouds-orgs.gif)

Next **Create Assembly**


## Create an Assembly

Assembly is workspace for you application. To create an assembly

1. Click **Assemblies** from left nav or top nav .
2. In the assemblies listing page click **New Assembly** on the right hand side
or towards the end of listing.
3. Enter assembly details, Click save. Next [Create a Platform](#create-a-platform)


To learn about additional Account activities for assemblies, teams, users and notifications refer to:

* <a href="/user/account/create-a-team-in-an-organization.html">Teams in Organization</a>
    * <a href="/user/account/add-user-to-team.html">Add a User to a Team</a>
* <a href="/user/design/manage-assemblies.html">Manage Assemblies</a>
    * <a href="/user/design/add-team-to-assembly.html">Adding a Team to an Assembly</a>
    * <a href="/user/design/watch-a-notification.html">Watch Notification</a>
    * <a href="/user/design/specify-email-address-distribution-list-for-notifications.html">Specify an Email Address or Distribution List for Notification</a>
    * <a href="/user/design/create-assemblies-to-design-application.html">Create an Assembly -- Design an Application</a>


# OneOps Design Phase

In the design phase, one can create <a href="/user/design/add-a-platform-to-a-design.html">platforms</a> (building blocks) from existing available *packs*.
In this example, we will create simple application (Tomcat) which talks to back end database.


## Create a Platform

1. Click design (icon) from left nav or top nav or wizard.
2. Click **New Platform**, choose from existing packs in **pack name**
3. Modify any attributes of *component* to suit your application design.


## Commit a design

1. Click **review** to your changes, all changes are buffered in a *release* and are not applied unless you commit.
2. Once satisfied click **commit** to commit the changes . Next **[Create Environment][]**

* Change attributes of component which are common across environments.
* Add optional components /attachments in design phase.

See also:

* <a href="/user/general/key-concepts.html">Platforms</a>  
* <a href="/user/design/add-a-platform-to-a-design.html">Add a platform</a>
* <a href="/user/design/add-specific-component-to-a-design.html">Add a component</a>
* <a href="/user/design/platform-links-reference.html">Platform Dependency</a>
* <a href="/user/design/platform-packs.html">Packs/Circuits</a>
* <a href="/user/design/view-design-releases.html">View Design Releases</a>

# Transition Phase

Transition is where you define environment specific attributes as needed. The dev or qa environments may differ in terms of *availability* , *resources* needed and can be defined at environment level.

## Create an Environment
1. Click environment (icon) from left nav or top nav or wizard.
2. Click **New Environment** .
3. Select availability mode for your environment either at platform.
4. Modify any attributes of *<a href="/user/general/key-concepts.html">components</a>* which may differ from design.

For example *qa* environment compute size requirements may differ from **development/test** or **production** environment, in such scenario you may choose default compute size based on what matches most of the environment requirements.

It's not uncommon to choose **development** environment compute size as default for design which allows you to create multiple test environments without changing design.

This helps in creating environments faster without changing too many attributes at design level. As a best practice try 
to have most used configuration in design. Also see <a href="/user/design/variables.html">variables</a>

**Lock** any environment specific attributes to prevent the environment changes
to be override from design pulls.

5. Click **review** and **commit and deploy** your changes. Next **<a href="/user/transition/deploy-multiple-clouds-in-parallel.html">Deploy</a>**.

See also:

* <a href="/user/transition/environment.html">Environment</a>
* <a href="/user/design/upgrade-application-version-in-environment.html">Upgrade an Application Version in an Environment</a>
* <a href="/user/transition/environment-releases.html">Environment Releases</a>
* <a href="/user/account/environment-profiles.html">Environment-profiles</a>

## Deploy an Application


1. Click `commit and deploy` Review the **deployment plan** generated by OneOps.  
2. Click on a *particular* step to know what change is going to be deployed.
3. Want to change plan, **discard** and no changes would be deployed.
4. If satisfied click **green Deploy**

It can take few minutes to deploy the application to cloud infrastructure selected during environment creation.

At this time One Ops is executing actual work orders on the cloud of your choice, **switching** clouds is then matter of adding clouds and  shutting down clouds which may not be needed.

See also:

* <a href="/user/transition/deploy-multiple-clouds-in-parallel.html">Multi Cloud deployment</a>
* <a href="/user/transition/view-deployment-status.html">Check Deployment Status</a>
* <a href="/user/transition/deploy-provision-application-environment-first-time.html">Deploy and Provision an Application and Environment for the First Time</a>
* <a href="/user/transition/deploy-application-after-design-changes.html">Doing regular releases</a>

# Operate Phase

The successful deployment will *create* actual instances of components (computes,tomcats) on to cloud(s) chosen. Once you have *running environment* you would need to operate the environment which typically involves

## View Operations


1. View the status of your overall application.
2. View notifications, alerts, filter instances based on their state.

## Control Environment


1. Perform operational activities on <a href="/user/general/key-concepts.html">components</a> level, like restart of all tomcats.
Some of the commonly used operations but not limited to these
    1. Replace of compute in case of hardware failures.
    2. Restart of services.(tomcat, Cassandra, elastic search)
    3. Some of <a href="/user/operation/attachments.html">attachments</a> can be exposed as operations. Some of the
    popular one used are taking nodes out of traffic.
    4. Redeploy artifacts.
    5. Log Searches on volume components.
2. Control auto-repair / auto-scale.
3. Perform repairs at cloud level.

See also:

* <a href="/user/operation/assess-health-applications-platforms-clouds.html">Assess the Health of Applications, Platforms and Clouds</a>
* <a href="/user/operation/operations-summary.html">Operations Summary</a>
* <a href="/user/operation/control-environment.html">Control Environment</a>


## Monitoring


* OneOps by default will send emails (default notification mechanism) if any of components are in unhealthy or notify 
state. see <a href="/user/operation/monitoring-reference.html">Monitoring</a>
* If auto-repair is enabled, OneOps will auto-repair the instance. The actions taken to recover an instance are prescribed by `repair recipe` of the component. For example, if Compute is alerting for missing *heartbeat* by default Computes repair action involves the following
    * Check the ssh port  
    * If not able to connect after timeout, it will attempt *reboot*.
    * These might recover the compute, if not then auto-replace would be triggered.


# OneOps Documentation for Users

## Before You Start with OneOps

Before you start with OneOps, it is recommended that you read the following documentation. It is the most essential information you need to begin well.

* **<a href="/user/">Overview:</a>** OneOps business-level description of main benefits versus alternative solutions
* **<a href="/user/general/key-concepts.html">Key Concepts:</a>** Conceptual description and diagrams of how OneOps works
* **<a href="/user/general/getting-started.html">Getting Started:</a>** How to start using OneOps (this section)
* **<a href="/user/design/design-best-practices.html">Best Practices:</a>** How you should use OneOps for best results

## What You Will Need When You Work with OneOps

Refer to the following documentation as you work.

* **<a href="/user/operation/add-a-doc-url-to-a-monitor.html">How To:</a>** 'How To' instructions that solve a specific problem or achieve a specific solution
* **<a href="/user/general/testing.html">Testing & Debugging:</a>** Strategic overview description of how to test and debug OneOps
* **<a href="/general/contribute.html/">Contribution:</a>** How to provide feedback, report issues, contribute to development, or contact us
