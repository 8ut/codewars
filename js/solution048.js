//6kyu Consecutive strings
//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

//very tuff couldnt figure out how to increment the array by k but solved the first half

//SOLUTION
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}


function longestConsec(strarr, k) {
    let arr = strarr.splice('')
    let arr1 = [""]
    
    if(k != 1){
    for(let d = 0; d < k; d++){
    
   
      
    for(let i = 0; i < arr.length; i++){
      arr1[i] = arr[i] + arr[i+1]
      console.log(arr1)
      for(let d = 0; d < k; d++){
        
      }
      }
    }
      }

    let long = arr1[0]
    arr1.sort();

    for(let p = 0; p < arr1.length; p++){

        if(long.length < arr1[p].length){
            long = arr1[p]
        }
    }
    
    return long
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))