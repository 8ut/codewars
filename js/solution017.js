//7kyu Exes and Ohs
//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    
    let x = 0
    let o = 0
    str = str.toLowerCase();
    
      for(i = 0 ; i < str.length;i++) {

        console.log(str[i])

        if(str[i] == "o"){
         o = o + 1
        }else if(str[i] == "x"){
            x = x + 1
        }else{
            console.log("nothing")
        }
        
        }

        console.log(x)
        console.log(str[1])
        
        if(o == x){
          
            console.log("true")
          return true
          
        }else if(o !== x){
            console.log("false")
          return false
          
        }else{
          return true
        }
}

//XO("xxOo")
XO("xxxm")