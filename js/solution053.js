//6kyu Who likes it?
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  let arr = names.slice();
  let length = arr.length - 2
  if (arr.length == 0) {
    return "no one likes this"
  } else if(arr.length == 1){
    return `${arr[0]} likes this`
  } else if(arr.length == 2){
    return `${arr[0]} and ${arr[1]} like this`
  }
  else if (arr.length == 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
  }else if(arr.length > 3){
    return `${arr[0]}, ${arr[1]} and ${length} others like this`
  }
  return length;
}


console.log(likes(["", "", 'Alex', 'Jacob', 'Mark', 'Max']))

