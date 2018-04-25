  //Write a function that takes in a string and will capitalize every vowel and reverse the string.
  //Once completed return the newly modified string.
  
  //Test Case
  //Input: “Did every vowel get capitalized?”
  //Output: “?dEzIlAtIpAc tEg lEwOv YrEvE diD”

let myString = "Did every vowel get capitalized?";

function uppercase(sentence) {
  let arr = sentence.split('');
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u' || arr[i] === 'y') {
      arr[i] = arr[i].toUpperCase();
    }
  }
  let revArr = [];
  for(let j = arr.length - 1; j >= 0; j--){
    revArr.push(arr[j])
  }
  let newString = revArr.join('');
  console.log(newString);
}
uppercase(myString);