//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(message) {
    this.message = message
  }

  normalizePlaintext() {
    var stringle = this.message.toLowerCase().replace(/[^0-9a-z]/gi, '')
    return stringle
  }

  size() {
    var size = Math.ceil(Math.sqrt(this.normalizePlaintext().length))
    return size
  }

  plaintextSegments() {
    let chunks = []
    var stringle = this.normalizePlaintext()
    var size = this.size()
    
    for (let used=0; used<stringle.length; used+=size) {

      var piece = stringle.substring(used, (used+size))

      chunks.push(piece)
    }

    return chunks
  }

  ciphertext() {
    let chunks = this.plaintextSegments()
    let cipher = []
    var nowString = ''
    
    for (let index = 0; index < chunks.length; index ++) {
      nowString = chunks[index]
      for (let char = 0; char < nowString.length; char ++) {
        cipher[char] !== undefined ? cipher[char] += nowString.charAt(char) : cipher.push(nowString.charAt(char))
      }
    }

    return cipher.join('')
  }
}
