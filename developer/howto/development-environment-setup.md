---
layout: dev-doc
title: Development Environment Setup
---

# Introduction

This page details the steps to start development on OneOps. The instructions are aimed for OSX and Linux operating
system usage.

# Prerequisites

- Java
- Apache Maven 3.1.1
- Ruby
- Gems
- Git
- Favorite IDE like EclipseIDE or STS
- Create an `install` directory inside your home directory.
- Download the following open-source softwares into the `install` directory:
    * [Active-MQ version 5.11.1](http://activemq.apache.org/activemq-5111-release.html)
    * [Apache Tomcat 6](http://mirrors.gigenet.com/apache/tomcat/tomcat-6/v6.0.48/bin/apache-tomcat-6.0.48.tar.gz)
    * [Apache Cassandra](http://archive.apache.org/dist/cassandra/1.2.6/apache-cassandra-1.2.6-bin.tar.gz)
    * [PostgreSQL 9.2](https://www.postgresql.org/download/)
    * [Elasticsearch 1.7.1](https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.1.zip)
- [RVM](https://rvm.io/)

# Get Sources

Fork, clone and import the following projects into your favorite IDE. Use a common directory such as
`~/work/projects/walmart`.

- [cmsdal - https://github.com/oneops/cmsdal](https://github.com/oneops/cmsdal)
- [oo-commons - https://github.com/oneops/oo-commons](https://github.com/oneops/oo-commons)
- [amq-plugin - https://github.com/oneops/amq-plugin](https://github.com/oneops/amq-plugin)
- [adapter - https://github.com/oneops/adapter](https://github.com/oneops/adapter)
- [antenna - https://github.com/oneops/antenna](https://github.com/oneops/antenna)
- [cms-admin - https://github.com/oneops/cms-admin](https://github.com/oneops/cms-admin)
- [controller - https://github.com/oneops/controller](https://github.com/oneops/controller)
- [opamp - https://github.com/oneops/opamp](https://github.com/oneops/opamp)
- [sensor - https://github.com/oneops/sensor](https://github.com/oneops/sensor)
- [transistor - https://github.com/oneops/transistor](https://github.com/oneops/transistor)
- [transmitter - https://github.com/oneops/transmitter](https://github.com/oneops/transmitter)
- [inductor - https://github.com/oneops/inductor](https://github.com/oneops/inductor)
- [search - https://github.com/oneops/search](https://github.com/oneops/search)
- [circuit-oneops-1 - https://github.com/oneops/circuit-oneops-1](https://github.com/oneops/circuit-oneops-1)
- [db-schema - https://github.com/oneops/db-schema](https://github.com/oneops/db-schema)
- [display - https://github.com/oneops/display](https://github.com/oneops/display)
- [oneops-admin - https://github.com/oneops/oneops-admin](https://github.com/oneops/oneops-admin)

# Build Projects

Run a build on the projects with `mvn clean install` in this specific order:

1. cmsdal
1. oo-common
1. amq-plugin
1. adapter
1. antenna
1. cms-admin
1. controller
1. opamp
1. sensor
1. transistor
1. transmitter
1. inductor

# Environment Setup

Configure the required environment variables as per your local setup.

{% highlight shell %}
export OO_HOME=~/work/projects/walmart
export CASSANDRA_HOME=~/install/apache-cassandra-1.2.6/
export AMQ_HOME=~/install/apache-activemq-5.11.1
export AMQ_PLUGIN_HOME=$OO_HOME/amq-plugin
export PG_HOME=/Library/PostgreSQL/9.2
export KLOOPZDB_HOME=$OO_HOME/db-schema/db
{% endhighlight %}

Optionally configure these variables in a script or even in your shell startup in `~/.bash_profile` or
`~/.profile`.
  
Add a number of host names for OneOps in your `etc/hosts` file in addition to `localhost`:

{% highlight shell %}
#Before
127.0.0.1       localhost
#After
127.0.0.1       localhost api antenna opsmq daq kloopzappdb kloopzcmsdb cmsapi sensor activitidb kloopzmq kloopzapp search searchmq opsdb activemqdb
{% endhighlight %}


# Database Schema

Create the database schema:

1. Navigate to $OO_HOME/db-schema/db
1. Connect to the local postgres database via command line with - `$sudo -u postgres psql postgres`
1. Execute the scripts


{% highlight bash %}
postgres=# \i single_db_schemas.sql
postgres=# /q
./install-db.sh
./install-activitidb.sh
{% endhighlight %}

Validate database setup by connecting to all 3 databases - `user`, `cms` and `activity`.

{% highlight bash %}
| Database    |                             Jdbc URL        |  Credentials        |
| ----------- |:-------------                               |       -----         |
| User DB     | jdbc:postgresql://127.0.0.1:5432/kloopzapp  | kloopz / kloopz     |
| CMS DB      | jdbc:postgresql://127.0.0.1:5432/kloopzdb   | kloopzcm / kloopzcm |
| Activiti DB | jdbc:postgresql://127.0.0.1:5432/activitidb | activiti / activiti |
{% endhighlight%}

# ActiveMQ Setup

Copy the file `amqplugin-1.0.0-fat.jar` from `~/.m2/repository/com/oneops/amqplugin/1.0.0/` to ActiveMQ's `lib`
folder.

Copy activemq.xml to the ActiveMP `conf` folder.

{% highlight bash %}
$ cd $AMQ_HOME/conf
$ curl -o activemq.xml https://raw.githubusercontent.com/oneops/amq-plugin/master/src/main/resources/conf/amq_local_kahadb.xml
{% endhighlight %}

Set environment variable `KLOOPZ_AMQ_PASS` with `export KLOOPZ_AMQ_PASS=kloopzamqpass`

Now start ActivemqMQ server with

{% highlight bash %}
$ cd $AMQ_HOME/bin
    
# Based on OS environment, go to specific folder i.e macosx or linux-x86-64 or linux-x86-32 
$ cd /macosx
$ ./activemq restart && tail -100f ../../data/wrapper.log
{% endhighlight %}

Once the server started successfully, check the user interface at
 [http://localhost:8161/admin](http://localhost:8161/admin) and log in with the default credentials
 **admin/admin**.


# Inductor Setup

Setup the stub for inductor:

{% highlight bash %}
$ cd $OO_HOME/dev-tools/inductor-stub
$ mvn clean install
{% endhighlight %}

Prepare and install the Inductor gem:

{% highlight bash %}
$ cd $OO_HOME/oneops-admin
$ mkdir target
$ cp $OO_HOME/inductor/target/inductor-1.1.0.jar target/
$ gem build oneops-admin.gemspec
$ gem install oneops-admin-1.0.0.gem
{% endhighlight %}

This step might take 2-3 mins.
  
You can validate a successful install with the command `inductor help`.  In case of any errors, it can be helpful
to provide complete permissions to rvm or rubies folder.

Create one inductor for each cloud like aws, azure, openstack, etc..

{% highlight bash %}
$ cd ~/install
$ inductor create
$ cd inductor
$ inductor add
Queue? /public/oneops/clouds/aws
What is the authorization key? awssecretkey
{% endhighlight %}


Edit cloud related information in
`~/install/inductor/clouds-enabled/public.oneops.clouds.aws/conf/inductor.properties` as shown below

{% highlight bash %}
max_consumers = 10
local_max_consumers = 10
amq.authkey = awssecretkey
amq.zone = /public/oneops/clouds:aws
        
# Following needs to be uncommented in case if we want to stub the cloud
#stub.clouds=dev-dfwstg2 #This is the cloud we create through OneOps display UI.
#stub.responseTimeInSeconds=1
#stubResultCode=0
{% endhighlight %}

Provide `trustStore` as JVM startup argument for proper activeMQ connection in
`~/install/inductor/clouds-enabled/public.oneops.clouds.aws/conf/vmargs`.

{% highlight bash %}
-Djavax.net.ssl.trustStore=$AMQ_HOME/conf/client.ts
{% endhighlight %}

Link circuit-oneops-1 inside inductor.

{% highlight bash %}
$ cd ~/install/inductor
$ ln -s $OO_HOME/circuit-oneops-1 circuit-oneops-1
{% endhighlight %}

Start the inductor.

{% highlight bash %}
$ inductor start
{% endhighlight %}

You can check the status of Inductor with `inductor status` (or) `ps –ef | grep inductor`

# Running the Applications on Tomcat

Start Cassandra.

{% highlight bash %}
$ cd $CASSANDRA_HOME/bin
$ sudo -S ./cassandra -f
{% endhighlight %}

You can stop Cassandra with `sudo -S pgrep -f cassandra | xargs -n 1 sudo kill -9`

Add the following projects to Tomcat server.

![ServerProjects](/assets/docs/local/images/environment-setup-tomcat-projects.png)

Add the additional JVM arguments to Tomcat server startup parameters

{% highlight bash %}
-Doneops.url="http://localhost:3000" -Dcom.oneops.sensor.chdowntime=315360000 -XX:+CMSClassUnloadingEnabled -XX:+CMSPermGenSweepingEnabled -Xms512M -Xmx1024M -XX:MaxPermSize=512m -Dcom.sensor.cistates.cl=ONE
{% endhighlight %}

Create a file with 24 byte random string in `$OO_HOME`:

{% highlight bash %}
$ cd $OO_HOME
$ dd if=/dev/random count=24 bs=1 | xxd -ps > oo.des
{% endhighlight %}


Add environment variables to Tomcat server.

{% highlight bash %}
ACTIVITI_DB_HOST=kloopzcmsdb
ACTIVITI_DB_USER=activiti
ACTIVITI_DB_PASS=activiti
AMQ_USER=superuser
API_ACESS_CONTROL=permitAll
API_SECRET=oneops@ce$$
API_USER=oneops-api
CMS_DB_HOST=kloopzcmsdb
CMS_DB_USER=kloopzcm
CMS_DB_PASS=kloopzcm
CMS_DES_PEM=$OO_HOME/oo.des
com.oneops.sensor.channel.uptimedelay=100000000000
com.sensor.cistates.cl=ONE
CONTROLLER_SEARCH_PUBLISH_POOLSIZE=20
ECV_SECRET=switch@
ECV_USER=oneops
IS_SEARCH_ENABLED=true
JAVA_OPTS=-XX:+CMSClassUnloadingEnabled -XX:+CMSPermGenSweepingEnabled -Xms512M -Xmx1024M -XX:MaxPermSize=512m
KLOOPZ_AMQ_PASS=kloopzamqpass
KLOOPZ_NOTIFY_PASS=secret
MAX_HB_SEED_EVENT_DELAY=600
NOTIFICATION_SYSTEM_USER=admin
OPAMP_SEARCH_PUBLISH_POOLSIZE=40
ORPHAN_HANDLER_DELAY=1
ORPHAN_HANDLER_INIT_DELAY=2
SEARCH_PUBLISH_ASYNC=false
SEARCHMQ_USER=superuser
SEARCHMQ_PASS=kloopzamqpass
TRANSMITTER_SEARCH_PUBLISH_POOLSIZE=30
{% endhighlight %}

> Replace **$OO_HOME** value as the expression is not evaluated here.
> We provided **default credentials**. Relace those according to yours.

Create missing `retry` directories.

{% highlight bash %}
$ mkdir -p /opt/oneops/controller/antenna/retry
$ mkdir -p /opt/oneops/opamp/antenna/retry
$ mkdir -p /opt/oneops/cms-publisher/antenna/retry
$ mkdir -p /opt/oneops/transmitter/antenna/retry
$ mkdir -p /opt/oneops/transmitter/search/retry
$ mkdir -p /opt/oneops/controller/search/retry
$ mkdir -p /opt/oneops/opamp/search/retry
{% endhighlight %}

Start the Tomcat server. All applications should be deployed without any error in console.

# Circuit Setup

Run below command to install the Circuit component after installing Inductor.

{% highlight bash %}
----Optional start-------------------
$ export CMS_API=http://localhost:8080
$ export CMSAPI=http://localhost:8080
$ mkdir -p  $OO_HOME/circuit-install
$ cd $OO_HOME/circuit-install
$ circuit create
$ cd circuit
$ circuit init

$ cd $OO_HOME/circuit-oneops-1
$ bundle install
$ circuit install
{% endhighlight %}

In case if you face any errors try `bundle exec circuit create` and ensure that Tomcat is running

# Running OneOps

Add below environment variables to `~/.bash_profile`.

{% highlight bash %}
export OODB_HOST=localhost
export OODB_USERNAME=********
export OODB_PASSWORD=********
{% endhighlight %}

Install bundler

{% highlight bash %}
$ cd $OO_HOME/display
$ gem install bundler
$ bundle install
{% endhighlight %}

Set up the database's DDL & DML

{% highlight bash %}
$ cd $OO_HOME/display
$ bundle exec rake db:schema:load
$ bundle exec rake db:migrate
{% endhighlight %}

Start the Ruby on Rails server

{% highlight bash %}
$ cd $OO_HOME/display
$ rails server
{% endhighlight %}

> If the above gives error, try with `bundle exec rails server`

Now, the OneOps UI is available at [http://localhost:3000](http://localhost:3000)


# ElasticSearch

As part of development environment setup Elasticsearch is already downloaded at `~/install/elasticsearch1.7.1`.

Change cluster name to `oneops` in `~/install/elasticsearch1.7.1/config/elasticsearch.yml`

{% highlight bash %}
cluster.name: oneops
{% endhighlight %}

Start Elasticsearch and access the UI at http://localhost:9200/

{% highlight bash %}
$ cd ~/install/elasticsearch1.7.1/bin
$ ./elasticsearch
{% endhighlight %}

Setup OneOps related templates & data. Refer to [README](https://github.com/oneops/search).

{% highlight bash %}
$ cd $OO_HOME/search/src/main/resources/es/templates
$ curl -d @./cms_template.json -X PUT http://localhost:9200/_template/cms_template
$ curl -d @./event_template.json -X PUT http://localhost:9200/_template/event_template
$ curl -d @./cost_template.json -X PUT http://localhost:9200/_template/cost_template
$ cd $OO_HOME/search
{% endhighlight %}

5. Run SearchListener

{% highlight bash %}
$ java -jar -Dnodes=localhost:9300 -Dindex.name=cms-all -Damq.user=system -Damq.pass=abcd -Dcluster.name=oneops target/search.jar -Dsun.net.spi.nameservice.provider.1=dns,sun -Dsun.net.spi.nameservice.provider.2=default
{% endhighlight %}

