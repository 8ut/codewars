// 8kyu Will you make it?
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

//ez first try

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(fuelLeft * mpg >= distanceToPump){
        return true
    }else{
        return false
    }
  };