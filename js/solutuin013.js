//8kyu invert values 7/1/22
//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
    
    for(i=0;i<array.length;i++){
      array[i] *= -1;
    }
    return array
     
  }
