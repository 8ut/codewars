//8kyu Beginner Series #2 Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
    h = h * 3600000;
    m = m * 60000
    s = s * 1000;
    sum = h + m + s;
    return sum;
  }

  console.log(past(1,0,1))