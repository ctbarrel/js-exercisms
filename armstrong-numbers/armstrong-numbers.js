//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (testNum) => {

  let digitsArray = Array.from(`${testNum}`)
  var testArmstrong = 0
  
  for (let i=0; i<digitsArray.length; i++) {
    testArmstrong += (digitsArray[i] ** digitsArray.length)
  }

  let armstrongRtn = false

  testArmstrong == testNum ? armstrongRtn = true : armstrongRtn = false

  return armstrongRtn
};
