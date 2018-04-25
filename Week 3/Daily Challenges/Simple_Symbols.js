//Create a function that takes in a str parameter and will determine if it is an acceptable sequence 
//by either returning true or false. The str parameter will be composed of + and = symbols with several 
//letters between them (ie. ++d+===+c++==a). For the string to be true each letter must be surrounded
//by a + symbol. So the string to the left would be false. The string will not be empty and will have at 
//least one letter. Input:"+d+=3=+s+" Output:"true"; Input:"f++d+" Output:"false"

function testString(str) {
    let test = /^[a-zA-Z]+(+[a-zA-Z]+)*$/g;
    if(str.search(test)){
        return true;
    }
    else {
        return false;
    }
}
let myString = "+d+=3=+s+";
console.log(testString(myString));
