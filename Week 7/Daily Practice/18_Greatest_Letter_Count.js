//Create a function that takes a str parameter and returns the first word with the greatest number of repeated letters. 
//For example: "Today, will be the greatest codealong ever!" should return greatest because it has two e's (also contains two t's).Even though 'ever' also has two e's, 'greatest' comes before 'ever'. 
//If the the string contains no words with repeating letters than return -1.
 
//Test Cases
    //Input:"Hello Web Dev!" Output:"Hello"
    //Input:"No words with more than one"        Output:-1 

    
 // ##################################### 
 // Answer:  
 // #####################################

// split at each word
// var max count
// test for matches within each word against each letter successively
    // forEach
    // nested map
// if statement within map to save the highest number by comparing to the current value of above 'max count' var
// else return -1 if no matches

greatestRepeat = (str) => {
    let strSplit = str.split(" ");
    let maxCount = -1;
    strSplit.forEach(element => {
        element.split('').map(letter, i =>{
            
        })
    });
}