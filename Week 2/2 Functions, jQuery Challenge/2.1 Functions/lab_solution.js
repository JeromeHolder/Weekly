function findAverage(x, y, z) {
    return (x + y + z) / 3;
}

console.log(findAverage(1, 2, 3));

//more advanced example that takes in any amount of numbers

function findAverageOfArray(arrayOfNumbers) {
    
    let total = 0;
    
    for (let i=0; i < arrayOfNumbers.length; i++) {
        total = total + arrayOfNumbers[i];
    }
    
    return (total / arrayOfNumbers.length);

}

console.log(findAverageOfArray([16, 34, 19, 20]));