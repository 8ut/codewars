//7kyu String ends with? 6/26/22
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

//failed, overcoded and couldn't figure out how to compare the two arrays to see if the string was included as well as returning the correct values

function solution(str, ending){

    let arr = []
    let arrEnding = arr.slice()
    let final = []

    for (let i = 0; i < str.length; i++){
        arr[i] = str[i]
        console.log(arr[i])
    }

    console.log(arr.join(""))

    for(let p = 0; p < ending.length; p++){

        final[p] = arrEnding.pop()

        console.log(arrEnding)
    }


    console.log(arrEnding.join(""))

    console.log(arr.includes("cde"))
    console.log(final.toString())


}

solution("abcde", "cde")

