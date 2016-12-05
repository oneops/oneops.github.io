---
layout: dev-doc
title: Development Environment Setup (OSX / Linux)
---
* [Prerequisites](#prerequisites)
* [Step by Step guide](#step-by-step-guide)
    * [Core Steps](#core-steps)
    * [Inductor Setup](#inductor-setup)
    * [Run Applications on Tomcat](#run-applications-on-tomcat)
    * [Circuit Setup](#circuit-setup)
    * [Run OneOps](#run-oneops)
    * [Additional](#additional)
        * [ElasticSearch](#elasticsearch)

# Prerequisites
- Java
- Maven
- Ruby
- Gems
- Git
- Favorite IDE like eclipse or STS
- Create an **install** directory inside your home directory ($ mkdir ~/install)
- Download the following open-source softwares from the web into the **install** directory:
    * [Active-MQ version 5.11.1](http://activemq.apache.org/activemq-5111-release.html)
    * [Apache Tomcat 6](http://mirrors.gigenet.com/apache/tomcat/tomcat-6/v6.0.48/bin/apache-tomcat-6.0.48.tar.gz)
    * [Apache Cassandra](http://archive.apache.org/dist/cassandra/1.2.6/apache-cassandra-1.2.6-bin.tar.gz)
    * [Apache Maven](http://www.trieuvan.com/apache/maven/maven-3/3.1.1/binaries/apache-maven-3.1.1-bin.tar.gz)
    * [PostgreSQL 9.2](https://www.postgresql.org/download/)
    * [Spring Tool Suite](http://download.springsource.com/milestone/STS/3.5.0.M1/dist/e4.3/spring-tool-suite-3.5.0.M1-e4.3.1-macosx-cocoa-x86_64-installer.dmg) (or) Any IDE
    * [Elasticsearch 1.7.1](https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.1.zip)
    * `curl -sSL https://get.rvm.io | bash` (RVM installation step) [Ensure to run this in your home directory]

# Step by Step guide
## Core Steps
1. Fork, clone and import below projects into your favorite IDE into any directory (eg: ~/work/projects/walmart)
    - [cmsdal](https://github.com/oneops/cmsdal) 
    - [oo-commons](https://github.com/oneops/oo-commons) 
    - [amq-plugin](https://github.com/oneops/amq-plugin)
    - [adapter](https://github.com/oneops/adapter)
    - [antenna](https://github.com/oneops/antenna)
    - [cms-admin](https://github.com/oneops/cms-admin)
    - [controller](https://github.com/oneops/controller)
    - [opamp](https://github.com/oneops/opamp)
    - [sensor](https://github.com/oneops/sensor)
    - [transistor](https://github.com/oneops/transistor)
    - [transmitter](https://github.com/oneops/transmitter)
    - [inductor](https://github.com/oneops/inductor)
    - [search](https://github.com/oneops/search)
    - [circuit-oneops-1](https://github.com/oneops/circuit-oneops-1)
    - [db-schema](https://github.com/oneops/db-schema)
    - [display](https://github.com/oneops/display)
    - [oneops-admin](https://github.com/oneops/oneops-admin)

2. Do `mvn clean install` in this specific order : **cmsdal, oo-common, amq-plugin, adapter, antenna, cms-admin, controller, opamp, sensor, transistor, transmitter, inductor**

3. Verify environment variables as per your local folder path.
```shell
    export OO_HOME=~/work/projects/walmart
    export CASSANDRA_HOME=~/install/apache-cassandra-1.2.6/
    export AMQ_HOME=~/install/apache-activemq-5.11.1
    export AMQ_PLUGIN_HOME=$OO_HOME/amq-plugin
    export PG_HOME=/Library/PostgreSQL/9.2
    export KLOOPZDB_HOME=$OO_HOME/db-schema/db
```
> It might be useful to add these variables to `~/.bash_profile`
	
4. Edit below entry in `etc/hosts` file.
```shell
    #Before
    127.0.0.1       localhost
    #After
    127.0.0.1       localhost api antenna opsmq daq kloopzappdb kloopzcmsdb cmsapi sensor activitidb kloopzmq kloopzapp search searchmq opsdb activemqdb
```

5. Create database schema.
    - Navigate to $OO_HOME/db-schema/db
    - Connect to local postgres database via command line as shown below
        - $sudo -u postgres psql postgres
        - Execute the script
            - postgres=# \i single_db_schemas.sql
            - postgres=# /q
    - ./install-db.sh
    - ./install-activitidb.sh

6. Validate database setup by connecting to all 3 databases : **user, cms & activity**

    | Database    |                             Jdbc URL        |  Credentials        |
    | ----------- |:-------------                               |       -----         |
    | User DB     | jdbc:postgresql://127.0.0.1:5432/kloopzapp  | kloopz / kloopz     |
    | CMS DB      | jdbc:postgresql://127.0.0.1:5432/kloopzdb   | kloopzcm / kloopzcm |
    | Activiti DB | jdbc:postgresql://127.0.0.1:5432/activitidb | activiti / activiti |

7. Copy `amqplugin-1.0.0-fat.jar` to ActiveMQ's lib folder (We can find this at maven repository. Eg: **~/.m2/repository/com/oneops/amqplugin/1.0.0/amqplugin-1.0.0-fat.jar**).

8. Copy activemq.xml to activemq conf folder.
```shell
    $ cd $AMQ_HOME/conf
    $ curl -o activemq.xml https://raw.githubusercontent.com/oneops/amq-plugin/master/src/main/resources/conf/amq_local_kahadb.xml
```

9. Set environment variable KLOOPZ_AMQ_PASS for successfully startup of activemq (`export KLOOPZ_AMQ_PASS=kloopzamqpass`)

10. Now start activemq server.
```shell
    $ cd $AMQ_HOME/bin
    
    # Based on OS environment, go to specific folder i.e macosx or linux-x86-64 or linux-x86-32 
    $ cd /macosx
    $ ./activemq restart && tail -100f ../../data/wrapper.log
```
> Once server is started successfully. Open http://localhost:8161/admin with default credentials **admin/admin**


## Inductor Setup

1. Setup stub for inductor
```shell
    $ cd $OO_HOME/dev-tools/inductor-stub
    $ mvn clean install
```

2. **Prepare:** Inductor gem
```shell
    $ cd $OO_HOME/oneops-admin
    $ mkdir target
    $ cp $OO_HOME/inductor/target/inductor-1.1.0.jar target/
    $ gem build oneops-admin.gemspec
```

3. **Install:** Inductor via gem
```shell
    $ gem install oneops-admin-1.0.0.gem
```
> This step might take 2-3 mins.
	
4. **Validate:** Execute `inductor help`

    > In case of error, provide complete permission to rvm or rubies folder.

5. Create one inductor for each cloud like aws, azure, openstack, etc..
```shell
    $ cd ~/install
    $ inductor create
    $ cd inductor
    $ inductor add
        Queue? /public/oneops/clouds/aws
        What is the authorization key? awssecretkey
```

6. Edit cloud related information in `~/install/inductor/clouds-enabled/public.oneops.clouds.aws/conf/inductor.properties` as shown below
```
    max_consumers = 10
    local_max_consumers = 10
    amq.authkey = awssecretkey
    amq.zone = /public/oneops/clouds:aws
        
    # Following needs to be uncommented in case if we want to stub the cloud
    #stub.clouds=dev-dfwstg2 #This is the cloud we create through OneOps display UI.
    #stub.responseTimeInSeconds=1
    #stubResultCode=0
```

7. Provide trustStore as vm argument for proper activeMQ connection in `~/install/inductor/clouds-enabled/public.oneops.clouds.aws/conf/vmargs`.

        -Djavax.net.ssl.trustStore=$AMQ_HOME/conf/client.ts

8. Link circuit-oneops-1 inside inductor.
```shell
    $ cd ~/install/inductor
    $ ln -s $OO_HOME/circuit-oneops-1 circuit-oneops-1
```

9. Start the inductor.
```shell
    $ inductor start
```
> Command to check inductor status: `inductor status` (or) `ps –ef | grep inductor`

## Run Applications on Tomcat

1. Start cassandra.
```shell
    $ cd $CASSANDRA_HOME/bin
    $ sudo -S ./cassandra -f
```
> Stop Cassandra: `sudo -S pgrep -f cassandra | xargs -n 1 sudo kill -9`

2. Add below projects to tomcat server.

    ![ServerProjects](/assets/docs/local/images/environment-setup-tomcat-projects.png)

3. Add below as additional vm args to tomcat server.
```
-Doneops.url="http://localhost:3000" -Dcom.oneops.sensor.chdowntime=315360000 -XX:+CMSClassUnloadingEnabled -XX:+CMSPermGenSweepingEnabled -Xms512M -Xmx1024M -XX:MaxPermSize=512m -Dcom.sensor.cistates.cl=ONE
```

4. Execute below command from $OO_HOME
```shell
    $ cd $OO_HOME
    $ dd if=/dev/random count=24 bs=1 | xxd -ps > oo.des
```

5. Add below environment variables to tomcat server.
```
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
```
> Replace **$OO_HOME** value as the expression is not evaluated here.
> We provided **default credentials**. Relace those according to yours.

6. Create missing directories.
```shell
    $ mkdir -p /opt/oneops/controller/antenna/retry
    $ mkdir -p /opt/oneops/opamp/antenna/retry
    $ mkdir -p /opt/oneops/cms-publisher/antenna/retry
    $ mkdir -p /opt/oneops/transmitter/antenna/retry
    $ mkdir -p /opt/oneops/transmitter/search/retry
    $ mkdir -p /opt/oneops/controller/search/retry
    $ mkdir -p /opt/oneops/opamp/search/retry
```

7. Start tomcat server. All applications should be deployed without any error in console.

## Circuit Setup
Run below command to install circuit component.

```shell
----Optional start-------------------
#Only if inductor gems needs any update
$ cd $OO_HOME/oneops-admin
$ gem uninstall -x oneops-admin
$ gem build oneops-admin.gemspec
$ gem install oneops-admin-1.0.0.gem --no-ri --no-rdoc  
#This step might take 2-3 mins
-----Optional end-----------------

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
```
> In case if you face any errors try  `bundle exec circuit create`. Make sure tomcat is running

## Run OneOps
1. Add below environment variables to `~/.bash_profile`.
```shell
    export OODB_HOST=localhost
    export OODB_USERNAME=********
    export OODB_PASSWORD=********
```

2. Install bundler
```shell
    $ cd $OO_HOME/display
    $ gem install bundler
    $ bundle install
```

3. Setup database's DDL & DML
```shell
    $ cd $OO_HOME/display
    $ bundle exec rake db:schema:load
    $ bundle exec rake db:migrate  
```

4. Run Ruby on Rails server
```shell
    $ cd $OO_HOME/display
    $ rails server
```
> If the above gives error, try with `bundle exec rails server`

5. Now, OneOps UI should be available at http://localhost:3000

## Additional

### ElasticSearch

1. As part of development environment elasticsearch is already downloaded at ~/install/elasticsearch1.7.1.

2. Change cluster name to oneops in `~/install/elasticsearch1.7.1/config/elasticsearch.yml`
```
    cluster.name: oneops
```

3. Start elasticsearch. Elasticsearch URL :  http://localhost:9200/
```shell
    $ cd ~/install/elasticsearch1.7.1/bin
    $ ./elasticsearch
```

4. Setup OneOps related templates & data. Refer to [README](https://github.com/oneops/search).
```shell
    $ cd $OO_HOME/search/src/main/resources/es/templates
    $ curl -d @./cms_template.json -X PUT http://localhost:9200/_template/cms_template
    $ curl -d @./event_template.json -X PUT http://localhost:9200/_template/event_template
    $ curl -d @./cost_template.json -X PUT http://localhost:9200/_template/cost_template
    $ cd $OO_HOME/search
```

5. Run SearchListener
```shell
    $ java -jar -Dnodes=localhost:9300 -Dindex.name=cms-all -Damq.user=system -Damq.pass=abcd -Dcluster.name=oneops target/search.jar -Dsun.net.spi.nameservice.provider.1=dns,sun -Dsun.net.spi.nameservice.provider.2=default
```
