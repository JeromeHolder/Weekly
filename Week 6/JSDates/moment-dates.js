const moment = require('moment-timezone');

// when we work with momentJS, we work with this type of
//  value that they have defined, called a 'moment'

// the true strength of moment as package is in 
//  easy manipulation of the date that they represent

// CREATING MOMENTS
    // to create a moment we just call the package like
    //  a constructor
    // if we don't pass any date string to specify a date
    //  it will create a moment that points to now
    let now = moment();
    // console.log(now);


    // we can also create moments that point to a specific
    //  instant, by passing in a date string, just like
    //  the normal javascript Date constructor 'Jul 01 2018 00:00:00 GMT-0400'
    let july1 = moment('Jul 01 2018 00:00:00 GMT-0400');


    // lastly, we can also create a moment by passing in  a javascript date
    let today = new Date();
    let todayMoment = moment(today);


// DISPLAYING MOMENTS
    // GO TO THE MOMENT DOCS
    // FIGURE OUT HOW TO PRINT A FORMATTED STRING OF THE DATE
        // the .format method can be called on any moment value
        // it returns a formatted string showing the date
        //  we can change the format of that string, by passing a format
        //  argument as below

        console.log(todayMoment.format("MMM, ddd, YYYY, hA"));


// GETTING ATTRIBUTES OF THE MOMENT using .year()


// SET ATTIBUTES OF THE MOMENT
    // let's say we wanted to change the 'now' moment to labour dat
    // valentines day, feb 14, 1975, set year using .year()

// now.hours(19);
// console.log(now.format('MMMM Do YYYY, h:mm a'));

// moment is really good at addding and subtracting from time
// .endOfDay(), .startOfWeek()
let endOfToday = moment();
endOfToday.endOf('day');



/* 
a very common workflow or situation is that you have
some js date that you want to manipulate, so here's what ppl do
    1. convert the date to a moment
        const converted = moment(originalDate);
    2. use the nice 'moment' manipulation on the moment you 
        created
    3. convert the resulting moment back into a date, using
        the 'toDate()' method

*/
// we can use .toDate() to convert twoYearsFromNow to a date
// let vanillaDate2 = twoYearsFromNow.toDate();

// one week in the future, but in Vancouver's Timezone
// let future = moment();
// future.add(1, 'week');
// future.tz('Europe/Paris');
// console.log(future.format('dddd, MMMM Do YYYY, h:mm a'));

