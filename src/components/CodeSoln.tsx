import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeSoln() {
  const code = `
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
    <code>res.on(“data”, function (chunk) {     
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
 req.end();`;

  return (
    <div className="rounded-xl w-full py-28 px-16 bg-black flex flex-col justify-center items-center text-center gap-16">
      <div className="text-5xl text-white w-3/4">
        Build flexible workflows with industry leading CPaaS APIs{" "}
      </div>
      <div></div>
      <div className="w-full">
        <div className="w-1/2">
          <CopyBlock
            text={code}
            language="javascript"
            showLineNumbers={true}
            theme={dracula}
            wrapLongLines
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
