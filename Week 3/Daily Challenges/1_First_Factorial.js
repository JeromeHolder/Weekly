//Write a function that takes a number parameter being passed and return the factorial of it. 
//(ex. number = 4, return the value of (4 * 3 * 2 * 1)). Just for the purpose of this challange, the number
//arugment will be an Integer.  
//Test Cases
    //Input:4 Output:24; 
    //Input:8 Output:40320;


function factCalc(num) {
    var factorial = (num - 1) * num;
    // console.log(factorial); // for testing
    for(var i = num - 2; i > 0; i--) {
        // console.log(factorial); // for testing
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factCalc(4));

// factCalc(4);


//Graeme's version
//Normal loop
function factorial(num) {
    if(num > 1) {
        let factNum = 1;
        for(let i = 2; i <= num; i++) {
            factNum *= i;
        }
        return factNum;
    }
    return 1;
}

// Recursion
function fact(num) {
    if(num > 1) {
        return num * fact(num - 1);
    }
    return 1;
}
console.log(fact(8));