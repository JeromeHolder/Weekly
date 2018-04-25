console.log('hello world');

console.log(process.argv);

//the first two elements of process.argv are always (i) path to node app, (ii) path to your file
if (process.argv[2] === 'production') {
    console.log('we are running for prod');
}

//we can use process.argv as we can any array
if (process.argv.length < 4) {
    console.log('Error: not enough arguments');
    process.exit();
}

let nonNumberArguments = [];
let sum = 0;

//start our counter at 2, since we know we always want to skip the first two arguments
for (let i=2; i < process.argv.length; i++) {

    const num = parseInt(process.argv[i]);

    if (isNaN(num)) {
        nonNumberArguments.push(process.argv[i]);
    } else {
        sum += num;
    }

}

console.log('Sum: ', sum);
console.log('Non-numbers:', nonNumberArguments);