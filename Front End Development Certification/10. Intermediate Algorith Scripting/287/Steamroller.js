function steamrollArray(arr){
    // I'm a steamroller, baby
    
    var finalArr = [];
    var collapse = function(arg){
        if(!Array.isArray(arg)){
            finalArr.push(arg);
        }
        else{
            for(var i in arg){
                collapse(arg[i]);
            }
        }
    };

    for(var i in arr){
        collapse(arr[i]);
    }

    return finalArr;
}

console.log(steamrollArray([]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));