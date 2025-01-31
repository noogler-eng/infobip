const data: {
  platform: string;
  main: {
    channel: string;
    code: string;
  }[];
}[] = [
  {
    platform: "Javascript",
    main: [{
      channel: "SMS",
      code: `
const { Infobip, AuthType } = require(‘@infobip-api/sdk’);
const infobip = new Infobip({
    baseUrl: ‘{baseUrl}’,
    apiKey: ‘{authorization}’,
    authType: AuthType.ApiKey,
});
infobip.channels.sms.send({
    messages: [{
        destinations: [{
            to: “41793026727”
        }],
        from: “InfoSMS”,
        text: “This is a sample message”,
    }]
});`,
    }, {
        channel: "WhatsApp",
        code: `
var https = require(‘follow-redirects’).https;
var fs = require(‘fs’);
var options = {
    ‘method’: ‘POST’,
    ‘hostname’: ‘{baseUrl}’,
    ‘path’: ‘/whatsapp/1/message/text’,
    ‘headers’: {
        ‘Authorization’: ‘{authorization}’,
        ‘Content–Type’: ‘application/json’,
        ‘Accept’: ‘application/json’
    },
    ‘maxRedirects’: 20
};

var req = https.request(options, function (res) {
    var chunks = [];
    res.on(“data”, function (chunk) {     
        chunks.push(chunk); 
    }); 
    
    res.on(“end”, function (chunk) {     
        var body = Buffer.concat(chunks);     
        console.log(body.toString()); 
    }); 
    
    res.on(“error”, function (error) {     
        console.error(error); 
    });
});

var postData = JSON.stringify({
    “from”: “441134960000”,
    “to”: “441134960001”,
    “messageId”: “a28dd97c-1ffb-4fcf-99f1-0b557ed381da”,
    “content”: {
        “text”: “Some text”
    },
    “callbackData”: “Callback data”,
    “notifyUrl”: “https://www.example.com/whatsapp”
});
req.write(postData);
req.end();`
    }]
  }, {
    platform: 'Rust',
    main: [{
        channel: 'SMS',
        code: `
use infobip_sdk::api::sms::SmsClient;
use infobip_sdk::configuration::{ApiKey, Configuration};
use infobip_sdk::model::sms::{Destination, Message, SendRequestBody};

#[tokio::main]
async fn main() {
    let config = Configuration::with_api_key(
        “<your-base-url>”.into(),
        ApiKey::new(“your-api-key”.into()),
    );
    
    let sms_client = SmsClient::with_configuration(config);

    let mut message = Message::new(vec![Destination::new(“41793026727”)]);
    message.text = Some(“Hello from Infobip API Rust SDK!”.into());
    message.from = Some(“InfoSMS”.into());

    let request_body = SendRequestBody::new(vec![message]);

    let response = sms_client.send(request_body).await.unwrap();

    println!(“{:?}”, response)
}
        `
        
    }, {
        channel: 'WhatsApp',
        code: ``  
    }]
  }, {
    platform: 'Go',
    main: [{
        channel: 'SMS',
        code: `
package main

import (
    “context”
    “fmt”
    “github.com/infobip-community/infobip-api-go-sdk/v3/pkg/infobip”
    “github.com/infobip-community/infobip-api-go-sdk/v3/pkg/infobip/models”
)

func main() {
    baseURL := “your-base-URL”
    apiKey := “your-api-key”

    client, _ := infobip.NewClient(baseURL, apiKey)

    msg := models.SMSMsg{
        Destinations: []models.SMSDestination{
            {To: “41793026727”},
        },
        From: “InfoSMS”,
        Text: “Hello from Infobip Go SDK!”,
    }

    req := models.SendSMSRequest{
        Messages: []models.SMSMsg{msg},
    }

    resp, respDetails, _ := client.SMS.Send(context.Background(), req)

    fmt.Printf(“Sent message: %+v”, resp)
    fmt.Printf(“HTTP response: %d”, respDetails.HTTPResponse.StatusCode)
}
        `
    }, {
        channel: 'WhatsApp',
        code: `
package main
import (
    “fmt”
    “strings”
    “net/http”
    “io/ioutil”
)

func main() {
    url := “https://%7BbaseUrl%7D/whatsapp/1/message/text”
    method := “POST”
    payload := strings.NewReader('
        {
            “from”:”441134960000″,
            ”to”:”441134960001″,
            ”messageId”:”a28dd97c-1ffb-4fcf-99f1-0b557ed381da”,
            ”content”:{
                “text”:”Some text”
            },
            ”callbackData”:
            ”Callback data”,
            ”notifyUrl”:”https://www.example.com/whatsapp”
        }')
    client := &http.Client { }
    req, err := http.NewRequest(method, url, payload)
    if err != nil {     
        fmt.Println(err)     
        return 
    } 

    req.Header.Add(“Authorization”, “{authorization}”) 
    req.Header.Add(“Content-Type”, “application/json”) 
    req.Header.Add(“Accept”, “application/json”) 

    res, err := client.Do(req)
    if err != nil {     
        fmt.Println(err)     
        return 
    } 

    defer res.Body.Close()

    body, err := ioutil.ReadAll(res.Body) 

    if err != nil {    
        fmt.Println(err)     
        return
    }    
    fmt.Println(string(body))
}
        `
    }]
  }     
];

export default data;
