function addNumbers(x, y) {
    let sum = x + y;
    return sum;
}

if (addNumbers) {
    console.log('the addNumbers function exists!');
}

//addNumbers() <-- parentheses to call
console.log(addNumbers());
//NaN, because we didn't give arguments

console.log(addNumbers(2, 3));

if (console.log) {
    console.log('we can write to the console');
}

//function with a conditional failure

function doSomethingThatCanFail(x, y) {

    if (x < 0 || y < 0) {
        return false;
    }

    //this never gets executed if either number is negative
    return x + y;

}

//

if (doSomethingThatCanFail(-1, -2)) {
    
} else {
    console.log('could not add');
}

//alternate way to name functions; assign function to variable

var multiplyNumbers = function(x, y) {
    let product = x * y;
    return product;
};

console.log(typeof multiplyNumbers);
console.log(multiplyNumbers(2, 3));

//more advanced: functions as property values

var ourMath = {
    add : function(x, y) {
        return x + y;
    },
    multiply : function(x, y) {
        return x * y;
    }
};

console.log(typeof ourMath);
console.log(ourMath.add(2, 3));
console.log(ourMath.multiply(2, 3));


//quiz answer

function formatAge(age, addition) {
    return age + addition + ' years old';
}

console.log(formatAge(10, 20));






