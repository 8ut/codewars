//7kyu Money, Money, Money
//https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
//cant seem to get the tax rate right

function calculateYears(principal, interest, tax, desired) {

    let money = principal
    let year = 0
    let rate = tax/10
    let sales = principal*rate

    while(principal < desired){
    principal = principal * interest

    money = money + principal

    principal = money - sales

    console.log(principal)
    console.log(sales)
    sales = principal*rate
    year++
    }

    return year
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))