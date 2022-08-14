//8kyu The Feast of Many Beasts 7/2/22
//https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {

    let first = beast[0]
    let l = beast.length-1
    let last = beast[l]
    
    let fDish = dish[0]
    let d = dish.length-1
    let lDish = dish[d]
    
    if (first == fDish && last == lDish){
      return true
    }
    else{
      return false
    }
    
    
}