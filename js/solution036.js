//8kyu Transportation on vacation
//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
    let rent = d * 40

    if(d>=3 && d<7){
        rent -= 20
    }else if(d>=7){
        rent -= 50
    }

    return rent
}

console.log(rentalCarCost(7))