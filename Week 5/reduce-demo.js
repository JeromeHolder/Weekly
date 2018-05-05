let donuts = [
    {
        name: 'pink sprinkles',
        calories: 200
    },
    {
        name: 'classic',
        calories: 190
    },
    {
        name: 'chocolate',
        calories: 10000
    },
    {
        name: 'carrots shaped like donuts',
        calories: 1
    },
];

// we give two arguments
// 1. function that is the accumulator
// 2. the starting value of the accumulator
let max = donuts.reduce((currentMax, currentDonut)=>{
    if(currentMax > currentDonut.calories){
        return currentMax;
    }
    else{
        return currentDonut.calories;
    }
}, 0);

console.log(max);