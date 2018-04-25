//Create a function that takes in a string and will insert dashes ('-') between the odd numbers in that string.
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
// Input:99946 Output:9-9-946 Input:56730 Output:567-30.

function dashinsert(str){
    let modStr = '';
    str.split('').forEach((num, i, arr) =>{
        return (Number(num) % 2 !== 0 && Number(arr[i+1] % 2 !== 0)?modStr += num + '-' : modStr += num)
    })
    return modStr
}
console.log(dashinsert('99946'));