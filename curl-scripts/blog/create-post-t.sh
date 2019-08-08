curl "http://localhost:4741/posts" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=b4c0bc693badfc527198b141f0c35691" \
  --data '{
    "post": {
      "title": "'"${TITLE}"'",
      "text": "'"${TXT}"'"
    }
  }'

echo
