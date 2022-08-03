//8kyu How good are you really?
//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

let mean = 0;

for (let i = 0;i<classPoints.length;i++){
    mean = mean + classPoints[i]
}

mean = mean/classPoints.length

if(yourPoints > mean){
    return true;
}else{
    return false
}