function nodup(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if(!newarr.includes(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

console.log(nodup([1, 2, 2, 3]));