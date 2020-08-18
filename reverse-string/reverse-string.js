export const reverseString = (inputString) => {
  let ans = ``
  for (let index = 0; index < inputString.length; index++) {
    let char = inputString[index]
    ans = char + ans
  }
  return ans
};