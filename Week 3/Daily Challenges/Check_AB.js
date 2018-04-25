//Write a function takes a str parameter and returns true if the characters “a” and “b” are 
//separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" 
//would result in true because there is exactly three characters between a and b).
// Otherwise return the string false. 

//Test Cases
//Input:"after badly" Output:"false" 
//Input:"Laura sobs" Output:"true"


function threeplaces(str) {
    let abdiff = str.indexOf('a') - str.indexOf('b');
    let badiff = str.indexOf('b') - str.indexOf('a');
    if (abdiff === 4 || badiff === 4) {
        return true;
    }
    else {
        return false;
    }
}
console.log(threeplaces("lane borrowed"));