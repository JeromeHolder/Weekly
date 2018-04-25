// Portal Exercise 
const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2

// 1. Create a loop that goes through a random array of numbers and logs only the even ones. 
//You can use the arrays given below or create some of your own to test your loop.

// 2. Create a loop that goes through an array of numbers and returns the value of the largest number in the array. 
// You can use the example arrays from Exercise 1 to test your loop.

// 3. Create a function that takes in a name parameter and returns a greeting with the name parameter and the date (using Javascript).


// var name = "Jerome";
// function nameDate(name) {
//     console.log("Hello " + name + ".\nToday is " + new Date);
// }
// nameDate(name);

// 4. Create a function that takes in a number and returns an array of numbers from 1 to the number parameter. 
// Have an if statement to ensure the number parameter is a positive number and if the number is negative return 0.

function arrBuild(num) {
    if (num > 0) {
        let arr = [];
        
        console.log(0);
    }
    else {
        for (var i = 1; i <= num; i++) {
            arr.push(i);
        }
        console.log(arr);
    }
}
arrBuild(-1);