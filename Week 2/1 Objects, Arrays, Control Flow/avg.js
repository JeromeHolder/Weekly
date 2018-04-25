var a = 18693;
var b = 10938496;
var c = 98234;

var average = (a + b + c)/3;
console.log("The average of your numbers is " + average);


if (average > 1000) {
    console.log('Wow! That is a big average!');
} 

if (average % 2 === 0) {
    console.log("The average is even");
} 
else {
    console.log("The average is odd");
}

if ((average > 50) && (average < 2000000)) {
    console.log('Yo');
}
else {
    console.log('No');
}

let grade = 85; //somewhere between 0 and 100

if (grade > 80) {
    console.log('A');
} 
else if ((grade > 70) && (grade < 80)) {
    console.log('B');
}
else if ((grade > 60) && (grade < 70)) {
    console.log('C');
}
else if ((grade > 50) && (grade < 60)) {
    console.log('D');
}
else {
    console.log('F');
}

let currentTime = new Date().getHours();
if (currentTime > 17) {
    console.log("Good evening");
} else if (currentTime > 12) {
    console.log("Good afternoon");
}
else {
    console.log("Good morning");
}


let day = new Date().getDay();
switch(day) {
    case 0:
        console.log("Chill");
        break;
    case 1:
        console.log("Code and do pod standup");
        break;
    case 2:
        console.log("Study");
        break;
}

var nums = [3.14, 42, 16, 300, 99];
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}