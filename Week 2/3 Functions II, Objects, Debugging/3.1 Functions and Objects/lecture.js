console.log(typeof $);  //jquery is just a function
//the below will help us break a statement like this down piece by piece:
//$('#myElement').click(runSomeFunctionICreated);

//anonymous function as argument
$('#some-button').click(function(){
    //do something when clicked
});

//named function as argument

function doSomethingOnClick() {
    //do something else
    alert('hey this button has been clicked');
}

$('#some-other-button').click(doSomethingOnClick);
//$('#some-other-button').click(doSomethingOnClick()); -- don't do this! the "()" will invoke the function rather than pass a reference

function aFunction() {
    return {
        click : function() {
            return 'I am clicked';
        }
    };
}

var someFunc = aFunction();
console.log(someFunc);  //shows the function declaration itself
console.log(someFunc());    //shows the OUTPUT of the function, which is an object with 'click' as a property
console.log(someFunc().click());    //returns "I am clicked"

aFunction().click();    //returns "I am clicked";

function showBox(name) {
    alert('hi!' + name);
}

//setTimeout is a native function that takes in two arguments, the first being a function
setTimeout(showBox, 1000);
setTimeout(function(){
    alert('hi again!');
}, 5000);
//the above are functionally similar, but naming our function allows it to be used in other places

//these two are equivalent, one using a named function, one using anonymous
$(".some-button").click(showBox);
$(".some-button").click(function(){
    showBox();
});

//the second example above does however give us some flexibility to pass in arguments:

$(".some-button").click(function(){
    showBox($("#username").val());  //showBox now gets some parameters
});

//arrow functions syntax examples

var declaredInTheUsualWay = function(a, b) {
    //do something
};

const declaredUsingAnArrowFunction = (a, b) => {
    //do something
};

//*****scoping example

var a = 123;
var c;

function something() {

    var b = 'abc';
    c = 123;

    const d = 456;

    let e = 'hello';

    for (let i=0; i < 10; i++) {
        //whatever
        console.log(e);     //hello, because e was defined in a parent scope
        var newVar = 'foo';
    }

    console.log(newVar);    //foo, because var doesn't use the for loop as a new scope

    var childFunction = function() {
        var f = 123;
    };

    console.log(f);     //undefined, f's scope is childFunction

    console.log(i);     //undefined, i was declarted with "let" and has the for loop as its scope

}

console.log(a);  //123, global
something();
console.log(b); //undefined, isolated to function
console.log(d); //undefined, isolated to function
console.log(e); //undefined, isolated to function


//similar to quiz in notes

var abc = '123';

function whatever() {

    var abc = '456';

    if (true) {
        let abc = '678';
        console.log(abc);   //678 (local to if block)
    }

    console.log(abc);   //456  (local to function)

}

whatever();
console.log(abc); //123 (global)







