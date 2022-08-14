//7kyu Get the Middle Character
//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s){

    let oddEven = Math.floor(s.length/2);
    console.log(oddEven)
      
    if (s.length % 2 == 0){
        
        let even = [s[oddEven-1], s[oddEven]]
    
        return even.join("")
    
    
    }else if(s.length % 2 == 1){
        
        return s[oddEven]
        
    }
    }

console.log(getMiddle("middle"))