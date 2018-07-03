---
layout: wmt/docs
side-navigation: user-navigation.html
title: Add or Edit Primary and Secondary Clouds
id: "add-edit-primary-secondary-clouds"
---

# Add, Edit or Remove Primary and Secondary Clouds

## Change a Secondary Cloud to a Primary Cloud in an Existing Platform/Environment

To flip an existing platform's secondary cloud to a primary cloud within an environment, follow these steps:


1. In the transition phase, select the environment
2. Select the platform
3. Locate the appropriate cloud and click **Make Primary**
4. Click Commit & Deploy, select the platform and click Ok
5. Review the deployment plan and click Deploy

To change a secondary cloud to a primary cloud for an existing environment, follow these steps (This change only impacts new platforms that are created after the environment has been edited):

1. In the transition phase, select the environment
2. Click on configuration and click edit
3. In the cloud section, locate the appropriate cloud and select the checkbox for primary
4. Click Save
5. Click Commit & Deploy, select the platform and click Ok
6. Review the deployment plan and click Deploy 

## Change a Primary Cloud to a Secondary Cloud in an Existing Platform/Environment

To flip an existing platform's primary cloud to a secondary cloud within a given environment, follow these steps:


1. In the transition phase, select the environment
2. Select the platform
3. Locate the appropriate cloud and click **Make Secondary**
4. Click Commit & Deploy, select the platform and click Ok
5. Review the deployment plan and click Deploy

To change a primary cloud to a secondary cloud for an existing environment, follow these steps (This change only impacts new platforms that are created after the environment has been edited):

1. In the transition phase, select the environment
2. Click on configuration and click edit
3. In the cloud section, locate the appropriate cloud and select the checkbox for secondary
4. Click Save
5. Click Commit & Deploy, select the platform and click Ok
6. Review the deployment plan and click Deploy 

## Add a Primary or Secondary Cloud to an Existing Platform/Environment

To add a primary or secondary cloud to an existing platform/environment, follow these steps:


1. In the transition phase, select the environment
2. Click on configuration and click edit
3. In the cloud section, locate the appropriate cloud and select the checkbox for either primary or secondary. (The default setting is ‘Not Used’.)
4. Click Save (This will add the new cloud to your environment, but will have no deployed instances and won't be used by any platforms)
5. Click Commit & Deploy, select the platform and click Ok
6. Review the deployment plan and click Deploy

>During the deployment, you have the option to select which platforms to deploy the new cloud to. During this stage, if you don’t select certain platforms, then the cloud will still get deployed to those platforms, but will have no deployed instances. To create instances on the new cloud for those platforms, go to your environment and click on Force Deploy, select the platform(s) to update and click deploy.

## Remove a Primary or Secondary Cloud from an Existing Platform/Environment

An existing cloud can only be removed from an environment (i.e. select 'Not Used') when it has no deployed instances, the environment has no open releases and no new deployments have been generated, are pending or are in-progress. If a cloud is deployed across multiple platforms within an environment, then it must be shutdown on all platforms before it can be removed from the environment

To remove a primary or secondary cloud from an existing platform/environment, follow these steps:


1. In the transition phase, select the environment
2. Select the platform
3. Locate the appropriate cloud and click **shutdown**
4. Click Commit & Deploy, select the platform and click Ok
5. Review the deployment plan and click Deploy
6. In the transition phase, select the environment 
7. Click on configuration and click edit
8. In the cloud section, locate the appropriate cloud and select the checkbox for ‘Not Used’ 
9. Click Save and the cloud will no longer be present in your environment and platform
