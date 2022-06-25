//8kyu Find the smallest integer in the array 6/24/22
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript

//tough, use the wrong conditionals and didn't reassign variables correctly so kept returning booleans instead of ints.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      
        let smallest = 0;
      
        for (let i = 0; i < args.length; i++){
            if(args[i] <= args[0]){
              args[0] = args[i]
              smallest = args[i]
            }
        }
        return smallest
    }


}
