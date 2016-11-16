---
layout: user-doc
title: Testing and Debugging
id: "testing-and-debugging" 
---

# Testing

REPLACE WITH guidance on testing.

# Debugging

## Find the URL for Your App

The default URL for your webapp that is deployed in OneOps is made up of the deployment details.

| Part           | Source             
|----------------|--------------------
| perf-test      | platform name
| d1             | environment name
| tomtest        | assembly name
| testing        | organization name
| OneOps QA Server | zone in Infoblox for the cloud

See also [Find the IP Address for a Compute Node](/documentation/user/howto/#find-the-ip-address-for-a-compute-node).

## View the Number of VMs in Use

To see what you are using in OneOps, follow these steps:

1. To go to the 'organization summary' page, click your organization name, next to your username at the top right.
2. Click the **reports** tab  which is part way down the page above notifications.
  The reports show the compute resources that you are using. You can spin the data by cloud and by assembly name.

## Error Message Meanings

| No | Error | Desc | Symptom | Fix
|----|-------|------|---------|----
| 1. | Rsync error | Deployment fails with rsync connection error in deployment log (Assemblies -> Transition -> Env -> View Deployment) | cmd error: rsync: connection unexpectedly closed (0 bytes received so far) [sender] <br/> cmd error: rsync error: unexplained error (code 255) at io.c(600) [sender=3.0.6] | Check the compute health status on the Operations page (Operations -> Env -> platform ) and make sure that the compute is reachable. If not ,Reboot the compute from the compute summary page (Operations -> Env -> platform -> Compute -> Summary tab & Actions). | Icon |Select 'Auto Repair' when creating an env, whichenables automatic repair of component instances based on monitors with enabled heartbeats and metrics you define with Unhealthy event triggers
| 2. | RequestEntityTooLarge | Deployment fails with RequestEntityTooLarge in deployment log (Assemblies -> Transition -> Env -> View Deployment) | FATAL: Excon::Errors::RequestEntityTooLarge: Expected([200, 202]) <=> Actual(413 Request Entity Too Large | Your organization tenant hasreached the quota limit for compute nodes. Create a JIRA ticket for IAAS team. <br/>Icon<br/>Cleanup any unwanted vms/env to make more room for new computes
| 3. | FATAL: Invalid imageRef provided | Deployment fails with FATAL: Invalid imageRef provided in deployment log. | FATAL: Invalid imageRef provided | This scenario can occur when: <br/>(a) the user selected bad/not-supported OS Type <br/>(b) the user selected correct OS Type, but it's missing mapping in the cloud <br/>Solution is to choose the OS that is supported on the selected cloud or leave the OS to "Default to cloud"
| 4. | ERROR: error in lvcreate | Deployment fails in 'Volume' component with following error message in failed deployment log: ERROR: error in lvcreate | ERROR: error in lvcreate | This scenario can occur when the value to "Size" attribute in 'Volume' component exceeds than the permitted values.The permitted values varies from compute flavor to compute flavor. The permitted or maximum size can be viewed here:Standard VM Size DefinitionRefer to column "Resized (GB) ".
| 5. | No space left on device<br/>ENOSPC: No space left on device | Deployment fails in 'compute' component with following error message in failed deployment log: <br/>No space left on device ENOSPC: No space left on device | ENOSPC: No space left on device | Potential cause for this scenario is that the affected compute does not have enough space under '/app' due to which deployment is failing. SSH to the affected compute and <br/>(a) check the memory usage using "df -hP /app" if there is zero space left over or very minimal space left over, then clear the unwanted files or logs to increase the free space.<br/>(b) if significant space is available in /app ,then check for the inodes using 'df -hi' command
| 6. | ERROR:Net::HTTPServerException: 404 "Not Found" | Deployment fails in 'artifact' component with following error message in failed deployment log: error: Net::HTTPServerException: 404 "Not Found"<br/>Or</br>Net::HTTPServerException: 403 "Forbidden | error: Net::HTTPServerException: 404 "Not Found" | The potential cause for this scenario :<br/>(a) artifact is absent in nexus<br/>(b) repository is mentioned as pangaea_snapshot instead of pangaes_releases or vice-versa.
| 7. | FATAL: RuntimeError: ruby_block[Install plugin: elasticsearch-kopf](es::default line 35) had an error: RuntimeError: [!] Failed to install plugin |  Deployment fails in 'Elastic-search' component with following error message in failed deployment log: Exception in thread "main" java.lang.UnsupportedClassVersionError: org/elasticsearch/plugins/PluginManager : Unsupported major.minor version 51.0 | Exception in thread "main" java.lang.UnsupportedClassVersionError: org/elasticsearch/plugins/PluginManager : Unsupported major.minor version 51.0 | To remediate this scenario, ensure that Java-7 is installed on the computes, where Elastic-search is being installed. Elastice-Search needs Java-7. <br/>How to update Java version: How to update JDK/JRE version on OneOps ?
| 8. | message=>String length exceeds maximum [name, 127]", "severity"=>"ERROR", "errorcode"=>1106 | Deployment fails with 'failed without any specified faults' in lb component. | server exists: {"message"=>"String length exceeds maximum [name, 127]", "severity"=>"ERROR", "errorcode"=>1106} | Potential cause for this scenario is that the provided 'environment' name is too long. It should not exceed 127 chars,as there is a limitation at netscalar level for LB creation.LB names should not exceed 127 chars.
| 9. | Compute Action 'status' fails. | Compute Action 'status' results in below error: `{"code":404,"errorCode":4003,"message":"Given ci 363128 already has active ops procedure."}` | `{"code":404,"errorCode":4003,"message":"Given ci 363128 already has active ops procedure."}` | In case of failure of any action/procedure with error message indicating that there is an 'active' cid present, then that inprogress action/procedure needs to be completed/canceled. Until then,no other action can be worked upon same component.
| 10.| LB is not working, but 'curl' to individual IPs work. | 'curl' to FQDN fails, whereas to Individual IP-Address works. | 'curl' to FQDN fails, whereas to Individual IP-Address works | Potential causes: <br/>check whether ECV is correct<br/>Check whether the ECV check has the port - 80 or 8080 and also the listener port should be the same as ECV check 80 or 8080.
| 11. | Not all services available for platform: xxxxxxxx, the missing services:[Wmt_oracle] | Deployment fails with error message : >>>>> Not all services available for platform: xxxxxxxxx, the missing services: | >>>>> Not all services available for platform: xxxxxxxxx, the missing services: | Potential Cause: the cloud on which the deployment has failed does not contain the listed service.In this case it is Oracle.

# Debugging

## Troubleshooting Logs

Transition > environment > deployment tab

1. From the Dashboard, select an assembly.
2. Click Transition.
  The Environments page displays
3. Select an environment.
4. Click the deployment tab.
5. Select a deployment.
  A list of deployment details displays an update to each component in the Deployment Details panel.
6. Select an update.
7. Select the log tab.
  The colored tabs display the conditions of deployment and allow you to sort the log information.

>The logs display in chronological order, newest to oldest and are stated in Chef coding language.

![Troubleshoot Logs](/assets/docs/local/images/troubleshoot-logs.png)




