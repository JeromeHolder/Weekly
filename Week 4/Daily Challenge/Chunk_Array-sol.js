let arr1=[0,1,2,3,4,5,6,7,8,9];

function chunkyMonkey(arr,length){
    let mod = Array.from(arr);
    let chunked = [];
    for(let i = 0; i < arr.length; i+=length){
        chunked.push(mod.splice(0,length))
    }
    return chunked;
}

console.log(JSON.stringify(chunkyMonkey(arr1, 3)))