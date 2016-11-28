---
layout: user-doc
title: Deployment Approval Process
id: deployment-approval-process
---

Deployment approval is a mechanism by which a team can govern deployment of environment attributed with approval flag

Key information about approval process


* Create a new support object to the specific clouds who require approval
* The support object can be added/removed from cloud by users with support permissions
* Only users with Support permission to the cloud can approve the deployment record associated with the cloud
* Multiple approval records will be generated for deployment corresponding to the number of support objects per clouds. Few or all approval records can be approved or rejected with single API call.

Add Team with Support permissions


1. Log into your OneOps server. Make sure you have Admin permission before going to next step
2. From the top navigation bar, select the Account link.
3. Select **teams** tab
4. On the left, click on **+Add Team...**
5. Give relevant name to the support object. Make sure to enable Support cloud permissions.
6. Make sure this team has access to environment to be approved or has admin/organization scope access
7. Add users/groups to the team, to provide this support access
7. click **Save.**

![Support permission team object](/assets/docs/local/images/support-permission-team-object.png)

Add Support object to cloud


1. Log into your OneOps server. Make sure you have Admin/Support permission before going to next step
2. From the left navigation bar, select the clouds link.
3. Select the cloud which you want to add approval process on
4. Select **support** tab
5. On the left, click on **+Add Support...**
6. Give relevant name to the support object. Make sure its state is enabled and deployment approval flag is turned on
7. click **Save.**

![Cloud support object](/assets/docs/local/images/cloud-support-object.png)

Any deployment to the environment using clouds with support object would require approval from support team member. There is no GUI support available for approving the deployment for such environment. Use below 2 API to approve the deployment

Get list of deployment records to be approved for a given deployment

~~~
Method: GET
<OneOps-URL>/<ORG-NAME>/assemblies/<ASSEMBLIY-NAME>/transition/environments/<ENVIRONMENT-NAME>/deployments/<DEPLOYMENT-ID>/approvals
Collect list of approvalIds to be approved, to form the body of next API call
~~~

Approve list of deployment records

~~~
Method: PUT
URL: <OneOps-URL>/<ORG-NAME>/assemblies/<ASSEMBLIY-NAME>/transition/environments/<ENVIRONMENT-NAME>/deployments/<DEPLOYMENT-ID>/approvals/settle
Body:
{
  "approvals": [{
    "state": "approved",
    "expiresIn": 5,
    "approvalId": "<APPROVAL-ID-1>",
    "comments": "approved by luke"
  }, {
    "state": "approved",
    "expiresIn": 5,
    "approvalId": "<APPROVAL-ID-2>",
    "comments": "approved by luke"
  }]
}
~~~
