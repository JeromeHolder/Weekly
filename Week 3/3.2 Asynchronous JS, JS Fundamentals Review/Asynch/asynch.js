const http = require('request');

const data = http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response, someData) {
    console.log(someData);
});

console.log('hello');

// Synchronous
var fetchedData = fetchFromDatabase(); // would take time
var sortedData = sortData(fetchedData);
sendSortedDataToDatabase(sortedData);
console.log('All done'); 

// Asynchronous
fetchFromDatabase(function(fetchedData) {
    // now we can use our data
    var sortedData = sortData(fetchedData); //synchronous in relation to the function
    sendSortedDataToDatabase(sortedData);
    console.log('done'); //will execute before sendSortedDataToDatabase because that will take time and the console.log won't
    //if done like this it will be passed as a callback and be asynchronous
    sendSortedDataToDatabase(function(){
        console.log('done'); // this will be asynchronous (i.e. will wait for sendSortedDataToDatabase to complete first)
    });
});
// code here cannot rely on the data from fetchFromDatabase because of the time it will take
// The data can only be accessed reliably from inside the function

var sum = x + y; //synchronous statement



// ANYTHING THAT IS GOING TO TAKE TIME IS ASYNCHRONOUS

// function anAsynchronousFunction(someCallBack) {
//     setTimeout(function() {
//         console.log(123);
//         someCallBack();
//     }, 1000);
// }

// anAsynchronousFunction();
// console.log('abc');