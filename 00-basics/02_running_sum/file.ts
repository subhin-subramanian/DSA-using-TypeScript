/*
    Problem: 
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

    Example 1:
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
    
    Example 2:
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
    
    Example 3:
    Input: nums = [3,1,2,10,1]
    Output: [3,4,6,16,17]

    Platform : Leetcode 

    Difficulty: Easy

    Approach: Use a for loop to traverse through the array. Start iteration from 1, because you don't need to add 
    anything to the first element. From the next element add that element with the previous one.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/

export function runSum(nums: number[]) : number[] {
    for (let i=0; i<nums.length; i++){
        if(i>0){
            nums[i] =  nums[i-1]+nums[i];
        }
    }
    return nums;
};

console.log(runSum([1,2,3,4,5]))