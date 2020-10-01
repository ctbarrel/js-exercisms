//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  
  //add a trillion milliseconds
  //convert back to date and return
  let milDate = startDate.getTime()

  milDate += (1000000000000) //add one gigasecond (1 trillion milliseconds)

  return new Date(milDate)

};
