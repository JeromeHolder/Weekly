let https = require('https');
let rawData = '';

https.get("https://httpbin.org/get?foo=bar&another=something", function(res) {

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        rawData += chunk;
    })
    res.on('end', function(){
        console.log(JSON.parse(rawData).args);
    })
  });