/*
  ## INSTRUCTIONS ##
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function sym() {
    // Convert the argument object into a proper array
    var args = Array.prototype.slice.call(arguments);

    // Return the symmetric difference of 2 arrays
    var getDiff = function (firstArr, secondArr) {

        // Returns items in firstArr that don't exist in secondArr
        function filterFunction(firstArr, secondArr) {
            return firstArr.filter(function (item) {
                return secondArr.indexOf(item) === -1;
            });
        }

        // Run filter function on each array against the other
        return filterFunction(firstArr, secondArr).concat(filterFunction(secondArr, firstArr));
    };

    // Reduce all arguments getting the difference of them
    var symarray = args.reduce(getDiff, []);

    // Run filter function to get the unique values
    var diff = symarray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    return diff;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3, 4, 5].
console.log("********************************************************************************");
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should contain only three elements.
console.log("********************************************************************************");
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // should return [1, 4, 5]
console.log("********************************************************************************");
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // should contain only three elements.
console.log("********************************************************************************");
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // should return [1, 4, 5].
console.log("********************************************************************************");
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // should contain only three elements.
console.log("********************************************************************************");
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // should return [2, 3, 4, 6, 7].
console.log("********************************************************************************");
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // should contain only five elements.
console.log("********************************************************************************");
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // should return [1, 2, 4, 5, 6, 7, 8, 9].
console.log("********************************************************************************");
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // should contain only eight elements.
console.log("********************************************************************************");