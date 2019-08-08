curl "http://localhost:4741/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=b4c0bc693badfc527198b141f0c35691" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old":"'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
