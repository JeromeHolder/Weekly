const express = require('express'),
      app = express(),
      bcrypt = require('bcrypt'),
      jwt = require('jsonwebtoken');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Secret key for jwt
let secret_key = "4e4dad6e88ceeb0e5a927c57ae7d3680af65f5fdecc36d4fd33f05e8bd640c4b";

// Mimic a DB of users
const usersDB = [];

app.post('/register', (req, res)=>{
    let {email, password} = req.body;
    bcrypt.genSalt(12, (err, salt)=>{
        if(err){
            return res.status(500).send('Error generating salt');
        }
        // If no error, use salt to generate hash
        bcrypt.hash(password, salt, (err, hashedPassword)=>{
            if(err){
                return res.status(500).send('Error hashing pasword');
            }
            // Create a new user object and add it to our usersDB array
                // NOTE: the 'email' below is a shorthand way of declaring the new key/value that can only be used if the key and the variable have the same name
            let newUser = {email, password:hashedPassword};
            usersDB.push(newUser);
            res.json(newUser);
        });
    });
});

app.post('/login', (req, res)=>{
    // Get username and password from req.body
    let email = req.body.email;
    let pw_guess = req.body.password;
    // Finds the object in the usersDB array that has the matching email address
    let user = usersDB.find((user) => {
        let isThisTheOne = user.email === email;
        return isThisTheOne;
    });
    bcrypt.compare(pw_guess, user.password, (err, result)=>{
        console.log(result);
        if(err){
            console.log(err);
            return res.status(500).send('Error authenticating user');
        }
        if(!result){
            return res.status(401).send('Incorrect username or password');  //Do not send back too much info on what the error is (providing too much info aids malicious intent)
        }
        else {
            // Now that we have authenticated the user, let's generate a JWT for them and send it back
            let payload = {
                iss: 'fishfindr',
                exp: (Date.now() + 24*60*60*1000),
                subject: user.email
            };
            jwt.sign(payload, secret_key, (err, token)=>{
                if(err){
                    return res.status(500).send('Error making token.');
                }
                return res.json({token: token});
            });
        }
    });
});

// Middleware
authorize = (req, res, next) =>{
    // Do some processing on the request, then either send a response or allow it to continue to its next processing fn
    // First check if the reqeust has a token, if not, respond with 401 Unauthorized
    let token = req.headers.authorization;
    // If there is no token
    if(!token){
        return res.status(401).send('Need a token');
    }
    // If there is a token we need to check it
    jwt.verify(token, secret_key, (err, payload)=>{
        // If there is an error it means the token was bad
        if(err){
            return res.status(401).send('Bad token');
        }
        // If we get here it means the request has a good token, so we can allow it to proceed to the final handler with next()
        next();
    });
}

app.get('/privatefishes', authorize, (req, res)=>{
    res.send("Don't eat my fish!");
});

app.listen(8080, ()=>{console.log('Server running on 8080')});