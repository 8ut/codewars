//7 kyu The highest profit wins! 6/29/22
//https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
    let min
    let max = arr.length - 1

    function compareNumbers(a,b){
        return a-b
    }

    arr.sort(compareNumbers);

    min = arr[0]
    max = arr[max]

    new arr = [min,max]

    return [min,max]
}