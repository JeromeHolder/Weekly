const express = require('express'),
      app = express(),
      bcrypt = require('bcrypt');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

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
            return res.send('Success!');
        }
    });
});

app.listen(8080, ()=>{console.log('Server running on 8080')});