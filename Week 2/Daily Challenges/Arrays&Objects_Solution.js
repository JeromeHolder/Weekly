 // 1. Create an array called myArray.
let myArray = [];
//--> place code here <--

// 2. With the for loop below, use the push method to add i into your newly created array.
for(let i = 10; i < 16; i ++){
    myArray.push(i)
//--> place code here <--

};

// To make sure you pushed correctly, we'll use console.log to see the array.
console.log('This is my array ' + myArray);

// 3. Using the console.log below, return the last index in your array.

console.log(myArray[myArray.length - 1]);

// 4. Because the number 13 is unlucky, let's remove it from the array using the splice method. 
    myArray.splice(3,1)
//--> place code here <--

console.log(myArray);

// 5. Create an object called myBurger. Your burger will have 2 key:value pairs.
    // The first key will be 'patty' and give it a value of your choice ie 'beef', 'chicken', 'veggie'
    // The second key will be toppings and its value will be an array containing the toppings of your favourite burger.

    //--> place code here <--
    let myBurger = {
        patty: 'veggie',
        toppings: ['pickles', 'cheese']
    };

// 6. Using the data below, console.log the last alarm title and the last snooze time.

let alarms = [
    {
        title: 'school',
        snooze: ['5:00am', '5:05am', '5:10am', '5:15am', '5:20am']
    },
    {
        title: 'work',
        snooze: ['8:55am']
    },
    {
        title: 'code',
        snooze: ['2:00am', '3:00am', '4:00am']
    }
];
console.log(alarms[alarms.length - 1].title + ' ' + alarms[alarms.length -1].snooze[alarms[alarms.length -1].snooze.length - 1]);
