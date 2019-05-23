"use strict"

module.exports = (context, callback) => {
  var resp = {status: "done"}

  var data = JSON.parse(context)
  var customerResponse = data.msg.txt.toLowerCase().trim() 
  if (customerResponse== "n" || customerResponse == "no") {
    resp = {
      whispers: [
        {
          txt: "Negative response recorded"
        }
      ],
      messages: [
        {
          txt: "Thank you for confirming. We will update our records."
        }
      ],
      customerTags: [
        "response:negative"
      ],
      commands: {
        end_session: true
      }
    }
  }
  if (customerResponse== "stop" || customerResponse == "stopall" || customerResponse == "unsubscribe" || customerResponse == "cancel" || customerResponse == "end" || customerResponse == "quit") {
    resp = {
      whispers: [
        {
          txt: "SMS opt out recorded"
        }
      ],
      customerTags: [
        "response:stop"
      ],
      commands: {
        end_session: true
      }
    }
  }
  callback(undefined, resp);
  return;
}
