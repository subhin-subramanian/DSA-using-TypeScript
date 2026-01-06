"use strict";
/*
    Problem:
    Given an integer array nums, find the subarray with the largest sum, and return its sum.

    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.

    Example 2:
    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.

    Example 3:
    Input: nums = [5,4,-1,7,8]
    Output: 23
    Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

    Platform: Leetcode

    Difficulty: Medium

    Approach: Kadane's algorithm. At each index:
              Decide whether to start a new subarray or extend the existing one
              Track the maximum sum seen so far

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSubarraySum = maxSubarraySum;
function maxSubarraySum(nums) {
    var currentSum = nums[0];
    var maxSum = nums[0];
    var startIndex = 0, bestStart = 0, bestEnd = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > (nums[i] + currentSum)) {
            currentSum = nums[i];
            startIndex = i;
        }
        else {
            currentSum = nums[i] + currentSum;
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
            bestStart = startIndex;
            bestEnd = i;
        }
    }
    nums = nums.slice(bestStart, bestEnd + 1);
    return { maxSum: maxSum, nums: nums };
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarraySum([1]));
console.log(maxSubarraySum([5, 4, -1, 7, 8]));
