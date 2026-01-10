"use strict";
/*
    Problem:
    Given an array of integers nums, calculate the pivot index of this array.
    The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
    If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
    Return the leftmost pivot index. If no such index exists, return -1.
    
    Example 1:
    Input: nums = [1,7,3,6,5,6]
    Output: 3
    Explanation:
    The pivot index is 3.
    Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
    Right sum = nums[4] + nums[5] = 5 + 6 = 11
    
    Example 2:
    Input: nums = [1,2,3]
    Output: -1
    Explanation:
    There is no index that satisfies the conditions in the problem statement.
    
    Example 3:
    Input: nums = [2,1,-1]
    Output: 0
    Explanation:
    The pivot index is 0.
    Left sum = 0 (no elements to the left of index 0)
    Right sum = nums[1] + nums[2] = 1 + -1 = 0

    Platform: Leetcode

    Difficulty: Easy

    Approach: Made a prefix array, then the condition will be leftSum === totalsum - pivot,
    but this approach give Space and time Complexity of n.
    Optimal approach: Calculate total sum first , check the left and right side is equal or not
    using a for loop at one go.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.pivotIndex = pivotIndex;
function pivotIndex(nums) {
    var leftSum = 0, rightSum, totalSum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        totalSum += num;
    }
    for (var i = 0; i < nums.length; i++) {
        rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([-1, 1, 2]));
