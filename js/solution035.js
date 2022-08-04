//7kyu Find the middle element
//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme (triplet) {
    let small = triplet[0]
    let great = triplet[0]
    let mid = 0

    for(let i = 0; i< triplet.length; i++){
        if(great < triplet[i]){
            great = triplet[i]
        }
        if(small > triplet[i]){
            small = triplet[i]
        }
        }
        for(let p = 0; p< triplet.length; p++){
            if(small < triplet[p] && triplet[p] < great){
                mid = triplet[p]
        }
    }

    return triplet.indexOf(mid)

}

console.log(gimme([5, 10, 14]))

