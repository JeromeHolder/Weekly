// process.argv automatically receives everything as a string
let result = 0;
let notnum = [];

// for (let i = 2; i < process.argv.length; i++){
//     result = result + parseInt(process.argv[i]);
// }
// console.log(result);


if(process.argv.length < 4) {
    console.log("Error: not enough arguments");
    process.exit();
}
for (let i = 2; i < process.argv.length; i++){
    const num = parseInt(process.argv[i]);
    if(isNaN(num)) {
        notnum.push(process.argv[i]);
    }
    else {
        result += num;
    }
}
console.log("sum " + result);
console.log("non-numbers " + notnum);