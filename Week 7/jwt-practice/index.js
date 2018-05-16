const jwt = require('jsonwebtoken');

let secret_key = "4e4dad6e88ceeb0e5a927c57ae7d3680af65f5fdecc36d4fd33f05e8bd640c4b";

// Imagine we just authenticated a user, johnny football
let payload = {
    iss: 'holder',
    subject: 'johnnyfootball@cool.go',
    exp: (Date.now() + 1000*60*60*24)
};

jwt.sign(payload, secret_key, (err, token)=>{
    if(err){
        console.log(err);
        return;
    }

    // We created our token, this is what we send back as the response to our /login route
    console.log(token);

    jwt.verify(token, secret_key, (err, decodedPayLoad)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(decodedPayLoad);
    });
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJob2xkZXIiLCJzdWJqZWN0Ijoiam9obm55Zm9vdGJhbGxAY29vbC5nbyIsImV4cCI6MTUyNjQ4MzMxNTE2NywiaWF0IjoxNTI2Mzk2OTE1fQ.OeoS9e1KYc5XOwYUzwzuDzK0PPXxjn6sK4Oa9HrESWA