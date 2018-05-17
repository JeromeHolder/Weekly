function countMe(str){
    let arr = str.toLowerCase().split(' ');
    let word = -1;
    let maxCount = 1;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            let count = 0;
            for(let k = j; k < arr[i].length; k++){
                if(arr[i][j] === arr[i][k]){
                    count++
                }
            }
            if(count > maxCount){
                maxCount = count;
                word = arr[i];
            }
        }
    }
    return word
}

console.log(countMe('This is the grEaTest codealong ever'));