//7kyu Testing 1-2-3
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    let arr = array.splice("")

    for(let i = 0; i < arr.length; i++){
      arr[i] = `${i+1}: ${arr[i]}`
    }
    return arr

}

console.log(number(["a", "b", "c"]))

