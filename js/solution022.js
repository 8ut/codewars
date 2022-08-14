//7 kyu Number of People in the Bus
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){
    let peopleOn = 0
    
    for(let i = 0; i < busStops.length; i++){
      peopleOn += busStops[i][0]
      peopleOn -= busStops[i][1]
    }
    
    return peopleOn;
  }

number([[10,0],[3,5],[5,8]]),5