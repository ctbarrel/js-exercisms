//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (color) => {

  let ans = 0
  let colorNum

  for (var count = 0; count < 2; count++) {
    
      switch (color[count].toLowerCase()) {
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
    if (count==0) {
      ans += (colorNum*10)
    } else {
      ans += colorNum
    }
  }
  return ans
};
