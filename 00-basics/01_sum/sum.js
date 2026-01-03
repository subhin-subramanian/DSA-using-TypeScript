"use strict";
/*
    Problem: Sum of the elements in an array

    Difficulty: Easy

    Approach: Traverse through the array using for loop and accumulate the sum in a variable

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfElements = sumOfElements;
function sumOfElements(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Test 
console.log("Sum of elements is ".concat(sumOfElements([1, 2, 3, 4, 5])));
