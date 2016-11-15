#!/bin/sh
dir=`pwd`
site=/tmp/oneops.com
rm -rf ${site}
java -jar $dir/_tools/jekyll.jar -d ${site} serve
