const http = require('http');
const fs = require('fs');

http.get('http://www.brainstation.io', function(response) {
    let body = '';

    response.setEncoding('utf8');
    
    response.on('data', function(chunk) {
        body += chunk;
    });

    response.on('end', function() {
        fs.writeFile('brainstation.html', body, function() {
            console.log('done!');
        });
    });
});