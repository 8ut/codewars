//6kyu Consecutive strings
//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {
    let arr = strarr.splice('')
    let arr1 = [""]
    let pp = arr.length
    
    for(let i = 0; i < arr.length; i++){
      arr1[i] = arr[i] + arr[i+1]
      console.log(arr1)
}
    
    return arr1
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))