const bcrypt = require('bcrypt');

// work factor tells bcrypt how many times to do the hashing
let workFactor = 12;
bcrypt.genSalt(workFactor, (err, salt) => {
    if(err){
        console.log(err);
        // return because we will not continue if there is an error
        return;
    }
    console.log(salt);
    // once we have the result we can cal bcrypt.hash()
    let password = 'dragon123';
    bcrypt.hash(password, salt, (err, hash) => {
        if(err){
            console.log(err);
            return;
        }
        // In this moment we have the salted and hashed password
        // We store this in the DB under the user's name
        // Note: the salt is contained in the hashed password
        console.log(hash);
    });
});

let hashedPassword = '$2b$12$4CTlip/z8d1/bWCWsD5VuejebjBSXNGKnonOuduJVT7J5oDnFi/0.'
let passwordGuess = 'dragon123';

bcrypt.compare(passwordGuess, hashedPassword, (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('It is', result, 'that the passwords match');
    if(result){
        // User is authenticated
    }
    else{
        // passwords do not match, failed login attempt
    }
});