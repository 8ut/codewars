//7kyu Descending Order 7/3/22
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

//failure, I didn't read the question correctly, here I just revesered the array of numbers instead of ordering them by greatest number to least.

function descendingOrder(n){
    
let myInt = n;
  
// Getting the string as a parameter
// and typecasting it into an integer
let myFunc = num => Number(num);
  
var arr = Array.from(String(myInt), myFunc);

function compareNumbers(a,b){
    return b-a
}

arr.sort(compareNumbers);

let reverse = arr.join('')

  
// Print the result array
console.log(reverse); 
    
}

descendingOrder(123456789)