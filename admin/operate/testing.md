---
layout: wmt/docs
title: Administrator Testing and Debugging
id: "testing-and-debugging"
side-navigation: admin-navigation.html
---

# Administrator Testing and Debugging

Build a *test* environment where you can test any new OneOps code changes and also validate any or new *pack* changes
your organization might do.

# Debugging


## UI does not come up  

Most likely the rails server didn't start properly (used in vagrant image and aws image), try to ssh to your vm and do

```
sudo service display start
# check the logs
tail -f /opt/oneops/log/rails.log
```

if using apache

* Make sure the **apache** is up if running *display* in apache.
* Run `nc -v host port` to see if the ports are not blocked. Do this for any of the  services.

## Deployments failing

* Check if all consumers can connect to messaging bus.
* All the OneOps webapps (adapter,transistor) expose health check /rest/<context>/ecv/status.. so check if all web contexts are up.

## Inductor not coming up

* Make sure the *auth-key* is same which you used for setting up the cloud.


# Deployment fails

Check the github commit log for any *cookbook* fixes which were done. Refresh the cookbooks.  

## Update cookbooks

1. Update [cookbooks](https://github.com/oneops/circuit-oneops-1/tree/master/components/cookbooks) to latest and greatest.

```
cd /home/oneops/build/circuit-oneops-1
git remote -v
  #  if its like git@oogit:/oneops/circuit-oneops-1 (fetch), replace with https
sudo git remote set-url origin https://github.com/oneops/circuit-oneops-1.git  
# Get the latest
sudo git pull
#If there are merge conflicts, resolve them  or want to overwrite with the latest
#This *replaces* all the cookbooks used by inductor to the latest in sync with github
sudo git reset --hard origin/master
## refer ls -la /opt/oneops/inductor

#For *shared cookbooks*, we can do the same
cd /home/oneops/build/oneops-admin
sudo git pull
## If conflicts and want to overwrite
sudo git reset --hard origin/master
sudo cp -r /home/oneops/build/oneops-admin/lib/shared /opt/oneops/inductor
```

## Inductor does not start throws Bad password

```
Caused by: java.lang.Throwable: com.oneops.amq.plugins.CmsAuthException: Bad password for user: /public/oneops/clouds:rackspace-dfw

# Check inductor properties

cat ///opt/oneops/inductor/clouds-enabled/public.oneops.clouds.aws/conf/inductor.properties|grep auth
# Note  amq.authkey = awssecretkey
# The value of authkey should be same as what was loaded during metadata change
refer https://github.com/oneops/circuit-oneops-1/tree/master/clouds
```

## Inductor does not start throws SSL connect error

```
Failed to connect to [ssl://localhost:61617?keepAlive=true] after: 1 attempt(s)
Looks like a cert error for java: Cause: The JMS connection has failed: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target

# Check inductor client ts file.
# As part of the latest Vagrant scripts inductor is created in /opt/oneops/inductor
# and proper cert is copied there, so if you bring the fresh VM,
# don't do inductor create - just do "inductor add"
# But if you do please do

cp  /opt/activemq/conf/client.ts /opt/oneops/inductor/lib
cd  /opt/oneops/inductor/
inductor start
```

## Cookbook does not exist .

```
#016-01-25 20:53:54,381     INFO    ProcessRunner:65    2822:52176 - cmd out: [2016-01-25T20:53:54+00:00] DEBUG: Re-raising #exception: Chef::Exceptions::CookbookNotFound
# This is mostly caused by missing symlink for the cookbooks in inductor ;
# Caused by manually deleting the inductor home

cd /opt/oneops/inductor ; ln -s /home/oneops/build/circuit-oneops-1 .
```

## Compute Provisioning fails Image does not exist

```
# The compute service metadata has image id which has been deleted.
# Try correcting the image id in compute cloud service
# Run the deployment again.
```

## OS step fails

```
# cmd out: service[named]: unable to locate the init.d script!
# This is  fixed with latest code
```

Refresh cookbooks following [this](#update-cookbooks)
