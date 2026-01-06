"use strict";
/*
    Problem: Find the max and min elements in a given array
    
    Example:
    Input= [1,2,3,4,5]
    Output should be 1 and 5

    Difficulty:Easy

    Approach: Track max & min while traversing once.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.minMax = minMax;
function minMax(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max: max, min: min };
}
// Test
console.log(minMax([1, 5, 7, 6, 3, 2, 14, 8]));
