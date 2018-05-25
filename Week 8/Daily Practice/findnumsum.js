// Create a function that takes a string and searches for all the numbers in the string.
// Once you find all the numbers, add them together and return the sum. 
// For example: if str is "43Hello 5World!" the output should be 48.

//Test Cases
    // Input:"7Bra1nStat10n9"         Output:18 -- should be 27?
    //Input:"10 4W3b D3v*65*" Output:85

 // ##################################### 
 // Answer:  
 // #####################################

 findnumsum = str => {
     let nums = [];
     str.split('').forEach(element => {
         if(!isNaN(parseInt(element))){
            nums.push(parseInt(element));
         }
     });
     let sum = nums.reduce((acc, cur) =>{
        return acc + cur
     });
     return sum;
 };

 console.log(findnumsum("7Bra1nStat10n9"));
 console.log(findnumsum("10 4W3b D3v*65*"));
 console.log(findnumsum("43Hello 5World!"));