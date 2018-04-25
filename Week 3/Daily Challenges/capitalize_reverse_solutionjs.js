  //Write a function that takes in a string and will capitalize every vowel and reverse the string.
  //Once completed return the newly modified string.
  
  //Test Case
  //Input: “Did every vowel get capitalized?”
  //Output: “?dEzIlAtIpAc tEg lEwOv YrEvE dID”

  function capitalizeMe(str){
    let vowels = ['a','e','i','o','u','y'];
    let arr = str.split('');

    for(let i = 0; i < vowels.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(vowels[i] === arr[j]){
          arr[j] = arr[j].toUpperCase();
        }
      }
    }
    return arr.reverse().join('');
  }

  // console.log(capitalizeMe('Did every vowel get capitalized?'))

  //flex solution
  let c = str=>str.replace(/[aeiouy]/g, l=>l.toUpperCase()).split('').reverse().join('')

  // console.log(c('Did every vowel get capitalized?'))