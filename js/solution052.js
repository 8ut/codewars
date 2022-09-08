//7kyu Complementary DNA
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){
    let arr = dna.split("");
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        if(arr[i] == "A"){
           arr[i] = "T"
        }else if(arr[i] == "T"){
           arr[i] = "A"
        }else if(arr[i] == "G"){
            arr[i] = "C"
        }else if(arr[i] == "C"){
            arr[i] = "G"
        }
    }
    arr = arr.join('');
    return arr;
}

console.log(DNAStrand("ATTGC"))