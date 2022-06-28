//7kyu Sum of two lowest positive integers 6/28/22
//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  

    //sort way

    function compareNumbers(a,b){
        return a-b
    }
  
    let sum
    let smallest
    let second
    numbers.sort(compareNumbers);
        
    smallest = numbers[0]
    second = numbers[1]
    console.log(smallest)
    console.log(second)
        
    sum = smallest + second
    console.log(sum)
        
    return sum;
     

    /* no clue how to sort was going to do it the ye olde way
    for(i = 0; i < numbers.length; i++){
        let smallest = numbers[0]
        let second = numbers[0]
        
        if(smallest > numbers[i]){
            smallest = numbers[i]
            //console.log(smallest)
        }

        if(second > smallest){
            second = numbers[i]
            //console.log(second)
        }

        

    }

    // study this

    function sumTwoSmallestNumbers(numbers) {  
  var min = Number.MAX_SAFE_INTEGER;
  var secondMin = Number.MAX_SAFE_INTEGER;
  
  var n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if(n < min) {
      secondMin = min;
      min = n;
    } else if( n < secondMin ) {
      secondMin = n;
    }
  }
  
  return min + secondMin;
}
    */

    

}

sumTwoSmallestNumbers([15, 28, 4, 2, 43])

