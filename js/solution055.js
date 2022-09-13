//7kyu Vowel Count
//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    arr = str.split("")
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "a"){
            count++
        }else if(arr[i] == "e"){
            count++
        }else if(arr[i] == "i"){
            count++
        }else if(arr[i] == "o"){
            count++
        }else if(arr[i] == "u"){
            count++
        }
    }
    return count;
}

console.log(getCount("abracadabra"));