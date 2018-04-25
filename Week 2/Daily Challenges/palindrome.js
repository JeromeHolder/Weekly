//First way
let word = 'racecar';
let word2 = 'class';

function isPal(str){
    let arr = str.split('');
    let reversedArr = [];

    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i])
    }

    if(reversedArr.join('') === str){
        return true
    }
    return false
}

//second way 

function myPal(str){
    let reversedStr = str.split('').reverse().join('');
    
    if(reversedStr === str){
        return true
    }
    return false
}