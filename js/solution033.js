//7kyu Sum of a sequence
//https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript


//completed the strict tests but code times out on codewars, inefficient algorithms may be the cause?
//20 minutes later, the remainder variable was usless for finding the how many times the loop should iterate

const sequenceSum = (begin, end, step) => {

    if(begin > end){
        return 0
    }else{
    let sum = 0;
    let arr = [0]
    let remainder = (end/begin)

    //was, for(let i = 0; i < remainder; i++)
    for(let i = 0; i < end; i++){
        if(begin <= end){
            arr[i] = begin

        } begin = begin + step
    }

    for(let p = 0; p < arr.length; p++){
       sum += arr[p]
    }

    return sum

}
}

console.log(sequenceSum(2, 6, 2))