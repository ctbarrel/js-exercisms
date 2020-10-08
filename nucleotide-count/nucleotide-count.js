//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(strand) {
    let adenine = 0
    let cytosine = 0
    let guanine = 0
    let thymine = 0
    let strandArray = strand.split('')
    
    for (let count = 0; count < strandArray.length; count ++) {

      switch (strandArray[count].toUpperCase()) {
        case 'A':
          adenine += 1
          break
        case 'C':
          cytosine += 1
          break
        case 'G':
          guanine += 1
          break
        case 'T':
          thymine += 1
          break
        default:
          throw new Error('Invalid nucleotide in strand')
      }
    }

    return `${adenine} ${cytosine} ${guanine} ${thymine}`
  }
}
