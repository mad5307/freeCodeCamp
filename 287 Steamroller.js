function steamrollArray(arr){
    // I'm a steamroller, baby
    console.log(arr.length);
    var finalArr = []
    for(var i in arr){
        console.log(Array.isArray(arr[i]));
        if(Array.isArray(arr[i])){
            for(var a in arr[i]){
                if(Array.isArray(arr[i][a])){
                }else{
                    finalArr.push(arr[i][a]);
                }
            }
        }else{
            finalArr.push(arr[i]);
        }
    }

    return finalArr;
}

console.log(steamrollArray([]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));