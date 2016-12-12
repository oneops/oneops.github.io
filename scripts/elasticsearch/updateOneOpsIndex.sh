#!/bin/bash

TMPIDXFILE=global-es.json
INDEX=site-oneops-all
LOG=bulk.log

echo "Removing old content"
rm -v $TMPIDXFILE $LOG

echo "Downloading OneOps content JSON"
curl http://oneops.com/searchmap-es.json > $TMPIDXFILE 

echo "Deleting Elasticsearch index $INDEX"
curl -XDELETE "localhost:9200/$INDEX?pretty&pretty"

echo "Bulk-loading into index - see $LOG"
# using section in the index as used by original search
curl -XPOST "localhost:9200/$INDEX/section/_bulk?pretty&refresh" --data-binary "@$TMPIDXFILE" > $LOG  

echo "Listing all indices" 
curl -XGET "localhost:9200/_cat/indices?v&pretty"

