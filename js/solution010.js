//7 kyu Square Every Digit 6/29/22
//https://www.codewars.com/kata/546e2562b03326a88e000020/solutions

//failure
function squareDigits(num){
  
    let arr = []
    
    for(i=0;i<num.toString().length;i++){
      
      arr[i] = num[i]
      console.log(num[i])
    }

    let bruh = num[1]
    console.log(bruh)
    
}
  
squareDigits(3212)