curl "http://localhost:4741/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=6cd8a489cb984d923b55d2e94b265018" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old":"'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
