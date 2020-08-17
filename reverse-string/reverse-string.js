//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (inputString) => {
  let ans = ``
  for (let index = 0; index < inputString.length; index++) {
    let char = inputString[index]
    ans = char + ans
  }
  return ans
};
