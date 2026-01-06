"use strict";
/*
    Problem:
    Given an integer array nums, return true if any value appears at least twice in the
    array, and return false if every element is distinct.
    
    Example 1:
    Input: nums = [1,2,3,1]
    Output: true
    Explanation:
    The element 1 occurs at the indices 0 and 3.

    Example 2:
    Input: nums = [1,2,3,4]
    Output: false
    Explanation:
    All elements are distinct.

    Platform: Leetcode

    Difficulty: Easy

    Approach:Use a Set to track visited elements. While traversing the array, if an
    element already exists in the set, it is a duplicate. Otherwise, add the element to the set.
    
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrDuplicate = arrDuplicate;
function arrDuplicate(nums) {
    var seen = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
// Test
console.log(arrDuplicate([1, 2, 3, 1]));
console.log(arrDuplicate([1, 2, 3, 4]));
