/*
  ## INSTRUCTIONS ##
    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

    Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);

    sumTwoAnd(3) returns 5.

    If either argument isn't a valid number, return undefined.
*/

function addTogether() {
    var len = arguments.length;
    var a = arguments[0];
    var b = arguments[1];
    var isNum = function (arg) {
        return Number.isFinite(arg);
    };
    if (len === 1 && isNum(a)) {
        return function (x) {
            if (isNum(x)) {
                return a + x;
            }
        };
    } else if (len === 2 && isNum(a) && isNum(b)) {
        return a + b;
    }
}

console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(2)(3)); // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined.
console.log(addTogether(2, "3")); // should return undefined.
console.log(addTogether(2, [3])); // should return undefined.