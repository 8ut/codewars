//7kyu Regex validate PIN code
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {

    //Regular expressions

    return /^(\d{4}|\d{6})$/.test(pin)


    //attempt
    // if(!Number.isInteger(pin) && pin % 1 != 0){
    //     return false
    // }


    // else if(pin.length == "4" || pin.length == "6"){
    //     return true
        
    // }else if(pin.length > "4" || pin.length > "6" || pin.length == 5 || pin.length < "4" || pin.length < "6"){
    //   return false
    // }
    //   else{
    //     return false
    // }

}

console.log(validatePIN("12345"))
console.log(validatePIN("1234"))
