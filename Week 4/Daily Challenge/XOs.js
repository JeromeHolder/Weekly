//Create a function that takes a str parameter and returns true if there is an equal number of x's and o's,
//otherwise return false. Only these two letters will be entered in the string, no punctuation or numbers. 
//For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 


//Test Cases
    //Input:"xooxxo" Output:"true" 
    //Input:"x" Output:"false"

function xo(str) {
    let arr = str.toLowerCase().split('');
    let countx = 0;
    let counto = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'x'){
            countx += 1;
        }
        else if(arr[i] === 'o'){
            counto += 1;
        }
    }
    if(countx === counto){
        return true;
    }
    else {
        return false;
    }
}
console.log(xo('xooxxxxooxoo'));