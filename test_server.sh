curl --request GET \
  --url http://localhost:3000/posts

curl --request POST \
  --url http://localhost:3000/posts \
  --header 'Content-Type: application/json' \
  --data '{
  "name": "11111Top 1000 ES6 Features every Web Developer must know",
  "url": "https://webapplog.com/es6",
  "text": "This essay will give you a quick introduction to ES6.",
  "comments": [
    "1",
    "2",
    "3"
  ]
}'

curl --request PUT \
  --url http://localhost:3000/posts/2 \
  --header 'Content-Type: application/json' \
  --data '{
  "name": "11111Top 1000 ES6 Features every Web Developer must know",
  "url": "https://webapplog.com/es61",
  "text": "This essay will give you a quick introduction to ES6.",
  "comments": [
    "1123",
    "2",
    "312312312312323"
  ]
}'

curl --request DELETE \
  --url http://localhost:3000/posts/0 \
  --header 'Content-Type: application/json'

curl --request GET \
  --url http://localhost:3000/posts/0/comments

curl --request POST \
  --url http://localhost:3000/posts/0/comments \
  --header 'Content-Type: application/json' \
  --data '{
	"comments":"1"
}
'

curl --request PUT \
  --url http://localhost:3000/posts/0/comments/0 \
  --header 'Content-Type: application/json' \
  --data '{
  "comments":
    "21312123123"
}'

curl --request DELETE \
  --url http://localhost:3000/posts/0/comments/0 \
  --header 'Content-Type: application/json'