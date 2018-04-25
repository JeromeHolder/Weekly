// Create a function that takes in a string and will insert dashes ('-') between the odd numbers in that string.
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
// Input:99946 Output:9-9-946 Input:56730 Output:567-30.

// function dashI(str){
//     let arr = str.split('');
//     for(let i = 0; i < arr.length; i++){
//         if(Number(arr[i]) % 2 !== 0 && Number(arr[i+1]) % 2 !== 0){
//             arr[i] += '-'
//         }
//     }
//     return arr.join('')
// }

// function dashyDash(str){
//     let modStr = '';
//     str.split('').forEach((num, i, arr)=>{
//         if(Number(num) % 2 !== 0 && Number(arr[i+1]) % 2 !== 0){
//             modStr+=num+'-'
//         } else {
//             modStr+=num
//         }
//     })
//     return modStr
// }

// function dashInsert(str) {
//     return str.split('').map((num, i, arr)=>{
//         return (Number(num) % 2 !== 0 && Number(arr[i+1] % 2 !== 0)?num+'-':num)
//     }).join('')
// }