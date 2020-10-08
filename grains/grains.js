//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (squareNum) => {
  let expo = 0
  let grains = ''
  if (squareNum < 1 || squareNum > 64) {
    throw new Error ('square must be between 1 and 64')
  } else {
    expo = squareNum - 1
    grains += BigInt(2 ** expo)
  }

  return grains
  
};

export const total = () => {
  let allGrains = BigInt(2 ** 64) - BigInt(1)

  return allGrains
};
