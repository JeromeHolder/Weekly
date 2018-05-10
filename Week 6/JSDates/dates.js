// THINKING ABOUT JS DATES AND TIME

    // Javascript dates are based around the UTC time standard
    // all time zones are expressed in terms of hours ahead or behind
    //  of the special 'UTC' time zone.

    // ALL JS Dates point to 1 specific moment in time.
    

// CREATING DATES
    // we can create a javascript date using the global 'Date' constructor
    // calling new Date() will create a date that points to now
    let now = new Date();
    console.log(now);


    // the Date constructor understands ISO date strings 'Jul 01 2018 00:00:00 GMT-0400 (GMT)'
    let july1 = new Date('Jul 01 2018 00:00:00 GMT-0400 (GMT)');
    let jstring = july1.toDateString();
    console.log(july1);
    console.log(jstring);

// DISPLAYING DATES
    // you can convert a js date into a string using the 
    //  .toString() method
    console.log(now.toString());
    // you can pull out individual parts of the date using date methods like getFullYear()
    let year = now.getFullYear();
    // month and day are indexed from 0 like an array
    let month = now.getMonth();
    let date = now.getDate();
    let day = now.getDay();
    let hours = now.getHours();
    console.log(year);



// TIMESTAMPS & MEASURING TIME
    // we can call getTime() to get back the timestamp
    // the timestamp is the # milliseconds since
    // the special moment Midnight Jan 1, 1970



// if you want to directlyt get the timestamp for now
//   you can call Date.now()
let now_timestamp = Date.now();
console.log(now_timestamp);

// we can measure / benchmark our code using timestamps
    // 1 create a timestamp at the start of runing code
    let start = Date.now();
    // 2. run your code you are trying to measure
    let x = [];
    for(let i = 0; i < 1000000; i++){
        x.push('yo');
    }

    // 3. create a timestamp when your code is done
    //  and subtract the timestamps to get the difference
    let end = Date.now();
    let elapsed = end - start;
    console.log(elapsed);

// MANIPULATING DATES

// sometimes we want to take an existing date
// and set one of it's attributes, like year, month
//  hours, seconds, date
// for each of the 'get' methods that we looked at above
// there is a corresponding 'set' method
//  the list of methods includes
//  setFullYear() allows us to set the eyar
//  setDate() allows us to set the date
//  setHours() to set the hours
//  setMinutes() set the minutes
//  setSeconds() to set seconds.

// here we are going to manipulate a date into being Turing's birthday
let turing = new Date();
turing.setFullYear(1921);
turing.setMonth(5);
turing.setDate(23);
turing.setHours(23);
turing.setMinutes(59);
turing.setSeconds(59);
console.log(turing);


// lets practice these methods by setting a date
// to point to halloween 1990, 11pm
// october 31, 1990
let halloween = new Date();
halloween.setFullYear(1990);
halloween.setMonth(9);
halloween.setDate(31);
halloween.setHours(23);
halloween.setMinutes(59);
halloween.setSeconds(59);
console.log(halloween);


