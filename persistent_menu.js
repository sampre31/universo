curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type" : "call_to_actions",
  "thread_state" : "existing_thread",
  "call_to_actions":[
    {
      "type":"postback",
      "title":"Help",
      "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_HELP"
    },
    {
      "type":"postback",
      "title":"Start a New Order",
      "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_START_ORDER"
    },
    {
      "type":"web_url",
      "title":"Checkout",
      "url":"http://petersapparel.parseapp.com/checkout",
      "webview_height_ratio": "full",
      "messenger_extensions": true
    },
    {
      "type":"web_url",
      "title":"View Website",
      "url":"http://petersapparel.parseapp.com/"
    }
  ]
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=EAASkPN3JEYABAJrTJVDpm40R6qfe6ZBgsNhe5fCoZAGjrPPZBCZCfZBaBQEvmtVECUY436yjAefS2hnySWwZCSW3fQAkA9zHtCIpShtj6REqYkgGh3MlfVtGn3ypeHRREAZBzlLXZCldijLYTGtcyOZBmrEsi6ZB4zMZCcbnryFPX33RAZDZD" 