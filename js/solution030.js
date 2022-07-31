//7kyu Categorize New Member
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

//FIRST TRRRRRRYYYYYYYYYYYY LESSS GOOOOOOOOOOOO

function openOrSenior(data){
    let output = []
    for(let i = 0; i<data.length; i++){
        if (data[i][0] >= 55 && data[i][1] > 7){
            output[i] = "Senior"
        }
        else{
            output[i] = "Open"
        }
        
    }
    return output;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))



