//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  //change C to G
  //change G to C
  //change A to U
  //change T to A
  let rna = ``
  for (let num = 0; num < dna.length; num++) {

    let char = dna.charAt(num)
    
    if (char == `G`) {
      //to C
      rna = rna + `C`
    } else if (char == `C`) {
      //to G
      rna = rna + `G`
    } else if (char == `T`) {
      //to A
      rna = rna + `A`
    } else if (char == `A`) {
      //to U
      rna = rna + `U`
    } //end of if/else statements
  } //replace each character
  return rna
};
