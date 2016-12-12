
echo "Deleting Elasticsearch index $1"
curl -XDELETE "localhost:9200/$1?pretty&pretty"

curl -XGET 'localhost:9200/_cat/indices?v&pretty'

