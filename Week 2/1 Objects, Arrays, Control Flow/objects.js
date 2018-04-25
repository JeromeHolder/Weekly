var some_empty_object = new Object();

/*var my_string = new String('some string');
var my_string = 'some string';*/

var some_other_empty_object = {};

console.log(some_empty_object);
console.log(some_other_empty_object);

var object_with_some_keys_and_values = {
    property1 : 'abc',
    property2 : 123
};

console.log(object_with_some_keys_and_values);

var person = {
    name : 'dan',
    age : 20
};

var person2 = {
    name : 'fred',
    age : 22
};

console.log(person.name);
console.log(person.age);
console.log(person['age']);

//person.homeTown = 'Hamilton';
person['home-town'] = 'Hamilton';

var some_var = 'location';
person[some_var] = 'Brainstation';

console.log(person);

var myArray = new Array();
var myOtherArray = [];

console.log(myArray);
console.log(myOtherArray);

var myArrayWithData = [1, 2, 3];

console.log(myArrayWithData);

var arr1 = ['foo', 'bar'];
var arr2 = [true, 123, 'something', null];

console.log(arr2);

console.log(arr2[0]);

arr2[0] = false;

console.log(arr2[0]);

arr2.push('hello world');
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.unshift(12345);
console.log(arr2);

arr2.shift();
console.log(arr2);

console.log(arr2.length);

var people = [person, person2];

console.log(people);

console.log(people[0].name);

console.log(tweets[123].author.followers[23].name);

