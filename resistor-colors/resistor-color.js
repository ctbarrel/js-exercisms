//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  let colorNum
  switch (color.toLowerCase()) {
    case `black`:
      colorNum = 0
      break
    case `brown`:
      colorNum = 1
      break
    case `red`:
      colorNum = 2
      break
    case `orange`:
      colorNum = 3
      break
    case `yellow`:
      colorNum = 4
      break
    case `green`:
      colorNum = 5
      break
    case `blue`:
      colorNum = 6
      break
    case `violet`:
      colorNum = 7
      break
    case `grey`:
      colorNum = 8
      break
    case `white`:
      colorNum = 9
      break
  }
  return colorNum
};

export const COLORS = [`black`,`brown`,`red`,`orange`,`yellow`,`green`,`blue`,`violet`,`grey`,`white`]
