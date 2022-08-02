//8kyu Cat years, Dog years
//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {

    let catYears
    let dogYears
    let yearsAfter = humanYears - 2

    if(humanYears == 1){
        catYears = 15;
        dogYears = 15;
        console.log(catYears)
    }else if(humanYears == 2){
        catYears = 15 + 9;
        dogYears = 15 + 9;
        console.log(catYears)
    }else if(humanYears >= 3){
        catYears = 24
        dogYears = 24
        for(let i = 0; i < yearsAfter; i++){
            catYears = catYears + 4;
            dogYears = dogYears + 5;
        }

    }


    return [humanYears,catYears,dogYears];
}

console.log(humanYearsCatYearsDogYears(3));




// let catYears;
// let dogYears;


// if(humanYears == 1){
//     catYears += 15
//     dogYears += 15
// }else if(humanYears == 2){
//     catYears += 24
//     dogYears += 24
// }else if(humanYears >= 3){
//     catYears = 24 + (humanYears * 4)
//     dogYears = 24 + (humanYears * 5)
// }

//   Number(catYears)
// Number(dogYears)

// return [humanYears,catYears,dogYears];