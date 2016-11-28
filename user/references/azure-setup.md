---
layout: user-doc
title: Azure Setup
id: "azure-setup"
---

How to Set Up Azure for OneOps

Roughly follow these directions <https://azure.microsoft.com/en-us/documentation/articles/resource-group-authenticate-service-principal/#authenticate-with-password---azure-cli>, but you don't need all of it.  This is the abridged version.

## Prerequisites

This assumes you have the Azure CLI installed and in ARM mode.

## Create an Application in Azure Active Directory

Create some application in Azure's Active Directory (AD).  This will be the client that OneOps uses to control Azure.  The name and URL values are not important, but should not clash with anything else in AD.

```
    azure ad app create --name "someapp" --password "dontusethis" \
      --home-page "https://someapp.azure.example.com" \
      --identifier-uris "https://someapp.azure.example.com/someapp"
```

This will return a few things:

```
  results
      info:    Executing command ad app create
      + Creating application someapp
      data:    AppId:                   {CLIENT_ID}
      data:    ObjectId:                abcd1234-bbbb-cccc-dddd-654321fedcba
      data:    DisplayName:             someapp
      data:    IdentifierUris:          0=https://someapp.azure.example.com/someapp <https://someapp.azure.example.com/cliapp>
      data:    ReplyUrls:
      data:    AvailableToOtherTenants:  False
      info:    ad app create command OK
```

App ID is your **client ID**.  The password you supplied is your **client secret**.  The application can be found in Azure's AD now.


## Create a Service Principal

Use the App ID (Client ID) to create a service principal.


```
azure ad sp create {CLIENT_ID}
```

Again, this returns the following:

```
  results
      info:    Executing command ad sp create
      + Creating service principal for application {CLIENT_ID}
      data:    Object Id:               {SP_ID}
      data:    Display Name:            someapp
      data:    Service Principal Names:
      data:                             {CLIENT_ID}
      data:                             https://someapp.azure.example.com/someapp <https://someapp.azure.example.com/someapp>
      info:    ad sp create command OK
```

This has added a key to the application in Azure AD.  You won't be able to see its value.

## Grant the Service Principal Permissions

Use the Object ID {SP_ID} returned above to assign the service principal **Contributor** permission to the scope of your subscription using your subscription ID (this may be too loose for real usage).

```
azure role assignment create --objectId {SP_ID} -o Contributor -c /subscriptions/{YOUR_SUBSCRIPTION_ID}/
```

## Setup OneOps

You can now use the Client ID (App ID) and Client Secret (password) when configuring your Azure cloud.

