// 7 kyu Reverse words
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

//tuff

function reverseWords(str) {
    let copyString = str.split("" && "!" && "." && "?")
    let reverse = copyString.reverse()
    let joinArr = reverse.join("")
    return joinArr
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."))