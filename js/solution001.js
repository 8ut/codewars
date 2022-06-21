// 8kyu Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

//mistake should have used the remainder operator for everything rather than the division


function lovefunc(flower1, flower2){
    if(flower1%2 == 0 && flower2 % 2 != 0){
        console.log("love")
        return true;
    }else if(flower1%2 != 0 && flower2 % 2 == 0){
        console.log("love")
        return true;
    }else{
        console.log("no love")
        return false;
    }
      
}

//botched

/*function lovefunc(flower1, flower2){
    if(flower1/2 == 0 && flower2 % 2 != 0){
        console.log("love")
        return true;
    }else if(flower1/2 != 0 && flower2 % 2 == 0){
        console.log("love")
        return true;
    }else{
        console.log("no love")
        return false;
    }
      
}
*/
