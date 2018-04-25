//Create a function that takes a num parameter and returns the number of hours 
//and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
//Separate the number of hours and minutes with a colon. 

//Test Cases 
//Input:126 Output:"2:6" 
//Input:45 Output:"0:45"

function timeConvert(num) {
    let hours = Math.floor(num/60);
    let minutes = num % 60;
    return hours + ":" + minutes;
}
let time = process.argv[2];
console.log(timeConvert(time));