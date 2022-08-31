//6kyu Duplicate Encoder 8/30/22
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

//

//solution
function duplicateEncode(word){
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        console.log(word.lastIndexOf(word[i]) == word.indexOf(word[i]))
        console.log(word.lastIndexOf(word[i]))
        console.log(word.indexOf(word[i]))
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;
}

console.log(duplicateEncode("bruhb"))