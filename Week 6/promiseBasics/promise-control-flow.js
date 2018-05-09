const axios = require('axios');

// promise chaining

const urls = [
    'http://brainstation.io',
    'http://reddit.com',
    'http://espn.com',
    'http://github.com'
];

// naive way - no ordering enforced here
// axios.get(urls[0]);
// axios.get(urls[1]);
// axios.get(urls[2]);

// to do promise chaining, do your first operation in a normal promise way
axios.get(urls[0])
     .then(result => {
        //  use the results in some way
        console.log('First request finished');

        // in the callback for the first operation we launch the next async operation
        // AND we return the promise out of our success callback
        // That promise will get exposed at the end of THIS .then
        return axios.get(urls[1]);
     })
     .then(result2 =>{
        //  result2 is the result from our axios request to urls[1]
        console.log('second request completed');

        return axios.get(urls[2]);
     })
     .then(result3 =>{
         console.log('third request completed');

         return axios.get(urls[3]);
     })
     .then(result4 =>{
         console.log('fourth request done');
     })
     .catch(error =>{ //only need one catch -- as soon as one of the above requests goes wrong it will go to the catch i.e. failFast behaviour
         console.log(error);
     });