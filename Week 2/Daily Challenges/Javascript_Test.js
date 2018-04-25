// Variables & Values
// 1. Which one of these are not Truthy values 
// [ ] 
// 0 <--
// ‘Hello world’  
// 23
// true

// 2. What does the following expression evaluate to? 
// !undefined === false
// false -- undefined evaluates to false, then ! changes it to true thf it evaluates to false



// _______________________________________

// 3. What is the value of bar?
// let bar = (!!0 === false || ‘hello world’)
// true



// _______________________________________

// 4. Which operator is used to assign a value to a variable? 
//  = 




// _______________________________________

// 5. Which one of this is a ternary operator? 
// ?  <--
// -- 
// ++ 
// &&
// !!


// 6. What does the following expression evaluate to? 
// “100” + 1
// 1001




// _______________________________________


// 7. Select all valid variable declaration below:  

// v school = 'brainstation'
// const school = 'brainstation' <--
// let school = 'brainstation' <--
// var school = 'brainstation' <--
// variable school = 'brainstation'


// _______________________________________

// 8. How do you access the character y in the following variable?
// var book = 'Eloquent Javascript'




// ______________________________________

// 9. How do you access the length property of the following variable? 
// var book = 'Eloquent Javascript'
// book.length




// ______________________________________

// 10. What do we mean when we say that something is block or function scoped?
// block is scoped to the block of code that it exists in, function is scoped to the function it is enclosed in



// ______________________________________
 
// 11. What is the result of ‘Hello World’ === ‘Hello World’? 




// ______________________________________

// 12. What is the result of 0 === [ ]? 




// ______________________________________

// 13. What is the result of 10 * ‘G’? NaN




// ______________________________________
// Arrays
// 1. Which of the following is a valid JavaScript array? 

// var animals = (1: "cat", 2: "dog", 3:"bird", 4:"elephant" )
// var animals = 1 = ("cat"), 2 = ("dog"), 3 = ("bird"), 4 = ("elephant")
// var animals = ["cat", "dog", "bird", "elephant"]
// var animals = "cat", "dog", "bird", "elephant"

// 2. Given the array in the above example, how would you access the value “bird”? 





// ______________________________________




// 3. How might you find how many items are inside of any given array? 




// ______________________________________

// 4. How can you create a new empty array? 
 


// ______________________________________

// 5. Given the following code, what is the final value of the variable array?
// let array = [‘Jim’, ‘Angela’, ‘Stanley’, ‘Pam’];
// array.push(‘Pam’);



// ______________________________________


// 6. How can we remove the last item in an array?




// ______________________________________

// 7. How can we access the first item in an array? 




// ______________________________________

// 8. Given the array in Question 5, what will be the result of accessing array[4]? Undefined dog




// ______________________________________
// 9 Given the array in question 5, how do we remove the value “Angela” from the array? 






// ______________________________________

// 10. Given the array in question 5, insert a new value “Michael” to the 2nd index position






// ______________________________________

// Functions
// 1. Which of the following is a valid method for creating a function? (Check all that applies)

// func sum ()  {       }
// sum function()  {       }
// let sum = function ()  {       }
// function sum ()  {       }
// function sum {       }

// 2. If x=3 and y=5, what is the add function going to return?

// function add(x, y){
//     return x + y
// }




// ______________________________________



// 3. What is the value of the variable addition? 
// var addition = add(9, 9)




// ______________________________________

// 4. How do you create a named function in JavaScript?





// ______________________________________

// 5. How do you call a function named "myFunction"?





// ______________________________________

// 6. What is the difference between function declaration and function execution? 





// ______________________________________

// 7. What is the value output in the console? 
// let name = "Ian"
 
// function greeting (name){
//     console.log("Hello " + name);
// }
 
// greeting("Will");


// ______________________________________
// 8. What is the returned value of result? 
// function sum (x, y){
//     return function (x, y) {
//         return x + y;
//     }
// }
 
// let result = sum(2, 4);

// function
// 2 + 4; 
// 6
// undefined

// Loops
//  1. Which of the following options is the valid syntax for a while loop?

// while i = 1 to 10
// while (i <= 10; i++)
// while (i <= 10)
// while 10; 

// 2. Which of the following options is the valid syntax for a while loop?

//  for (var i <= 5; i++){}
//  for (var i = 0; i <= 5; i++){}
//  for (var i = 0; i <= 5){}
//  for (var i = 1, i <= 5, i+2){}


// 3. What will the following print? 
// for (var i = 0; i < 5; i++) {
//     if (i === 4){
//         console.log(i)
//         break;
//     } else {
//         console.log(i)
//     }
// }

// 4. Fill in the condition for the below for-loop to run, from the value of i starting at 2 and ends whens it is less than 15, i increases in increments of 1. 
	
 for(                                                  ) {
      
 
 
   
}


// 5. Where would we insert the break statement if we want the loop to stop when sum has a value of 7?

// var sum = 0;
// for (var i = 0; i <= 100000; i++) {
//     if (sum === 7){
//         [A] <--
//         sum = sum + 1;
//         [B] <--
//     } else {
//         [C] <--
//         sum = sum + 1;
//      [D] <--
//     }
// }

 
 
 
 

// Objects
// var person = {
//     name: ‘Jan’,
//     age: ‘?’,
//     workDays: [‘Monday’, ‘Tuesday’, ‘Wednesday’, ‘Thursday’, ‘Friday’]
// }


// 1. What are the two ways we can access specific keys inside of an object? 





// ______________________________________

// 2. How might you access ‘Jan’ value within our object? person[‘name’], person.name





// ______________________________________

// 3. Using the above object, what is the result of person === person? FALSE






// ______________________________________

// 4. How might you add a property to the above object called occupation, where the value is “Manager”?  





// ______________________________________

// 5. Using the above object, what is the value of person.salary? undefined






// ______________________________________

// 6. Using the above object, how could we add “Saturday” to our list of workdays?
// person.workDays.push(‘Saturday’)




// _____________________________________

// 7. Using the above object, how could we change the value of the ‘age’ property to be a real number?




// ______________________________________

// Conditionals 
// 1. How to write an IF statement in JavaScript?

//  if i == 5 then
//  if (i == 5)
//  if i = 5
//  if i = 5 then

// 2. How to write an IF statement for executing some code if "i" is NOT equal to 5?

//  if (i <> 5)
//  if i <> 5
//  if i =! 5 then
//  if (i != 5)

// 3. Will the code below output a console log message in the console? 
// let a = 'alice'
// let b = 'will'
// let c = 'graeme'
 
// if(a && b && c === 'graeme'){
//     console.log('he is the new leader of the TA squad')
// }

// ______________________________________

// 4. In the code below, fill out the code so that it will output all even numbers into the console. 
// for (i=0; i< 20; i++) {
 
 
 
 
 
 
 
// }


// 5. Fill in the following switch statement so that the code will output the string “late submission” to the console if date is ‘Monday’ and output the string ‘on time!’ to the console if the date variable has the value of ‘Sunday’

// switch (date) {
   
 
 
 
 
 
 
 
// }





// <---------------------------- END	---------------------------->	
