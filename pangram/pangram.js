//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  
  const alph = 'abcdefghijklmnopqrstuvwxyz'
    
    let count = 0
    let rtnVal = false
    let sentenceLc = sentence.toLowerCase()

    //for each letter of the alphabet
    for(let letter of alph) {
      //check if the sentence has that letter
      for(let char of sentenceLc) {
        if (char === letter) {
          
          //as soon as it finds a letter, up the count and stop looking for that letter
          count++
          break
        }
      } 
    }

    //if the count is the same as the length of the alphabet, 
    if (count === alph.length) {
      rtnVal = true
    }

    return rtnVal

};
