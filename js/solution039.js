//7kyu Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

//anki join
function highAndLow(numbers){
    let arr = numbers.split(" ")
    arr = arr.map(Number);
    let high = arr[0]
    let low = arr[0]
    let value = []

    for(let i = 0; i < arr.length; i++){

        if(high < arr[i]){
           high = arr[i]
        }
        if(low >= arr[i]){
            low = arr[i]
        }
    }

    value[0] = high

    value[1] = low

    return value.join(" ")

}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))