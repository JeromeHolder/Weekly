const axios = require('axios');
// Here's how to call a function that uses promises

// Step 1 - Call the function, capture the promise it returns

let p = axios.get('http://reddit.com');

// Step 2 - Call the .then() method on the promise and supply your success callback
p.then(result => {
    // This code here handles a success outcome
    console.log(result);
});

// Step 3 - Take the same promise and call .catch() on it
//  We give our error call back to this
p.catch(error => {
    // This code here is where we write our error handling
    console.log(error);
})