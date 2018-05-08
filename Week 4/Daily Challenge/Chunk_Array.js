//Create a function that takes an array and a number as parameters. The challenge is to split the array (first parameter)
//into small arrays with a length determined by the number parameter (second parameter). 
//Return the array as a two-dimensional array. 

// Test Cases
// Input: arr = [“a”, “b”, “c”, “d”] & num = 2 Output: [[“a”, “b”], [“c”, “d”]] 
// Input: arr = [0,1,2,3,4,5]        & num = 3 Output: [[0,1,2], [3,4,5]]
// Input: arr =[0,1,2,3,4,5,6,7,8,9] & num = 3 Output: [[0,1,2],[3,4,5],[6,7,8],[9]]

function chunkArr(arr, num) {
    // for(let i = 0; i < arr.length; i++) {
        console.log(arr.join("").split("", num));
        console.log(arr);
    // }
}

chunkArr(['a', 'b', 'c', 'd'], 2);