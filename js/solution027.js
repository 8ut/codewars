//8kyu Counting sheep...
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript


function countSheeps(arrayOfSheep) {
  
    let amount = 0

    for(i=0;i<arrayOfSheep.length;i++){
    if(arrayOfSheep[i] == true){
    amount++
    }
}
    
    return amount
    
}