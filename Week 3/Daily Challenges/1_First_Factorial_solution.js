//Write a function that takes a number parameter and returns the factorial of it. 
//(ex. number = 4, return the value of (4 * 3 * 2 * 1)). Just for the purpose of this challange, the number arugment will be a positive integer.  
//Test Cases
    //Input:4 Output:24; 
    //Input:8 Output:40320;

function factorial(num){
    if(num > 1){
        let factNum = 1;
        for(let i = 2; i <= num; i++){
            factNum *= i;
        };
        return factNum;
    };
    return 1;
};

console.log(factorial(4))

function fact(num){
    if(num > 1){
        return num * fact(num-1);
    };
    return 1;
};
console.log(fact(8))