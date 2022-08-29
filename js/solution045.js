//6kyu Count characters in your string
//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (string) {  


    let arr = []
    let count = {}

    for(let i = 0; i < string.length; i++){
    arr[i] = string[i]

    }

    arr.forEach(function(p) { count[p] = (count[p]||0) + 1;});

    return count;
}



console.log((count("aba")))