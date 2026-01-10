/*
    Problem: Rotate an array k steps to the right

    Example 1:
    Input: [1,2,3,4,5]
    Output: [4,5,1,2,3]

    Difficulty: Medium

    Approach: If using brute force, rotate array 1 time and repeat it k times, but then
    time Complexity becomes O(n X k).
    For optimal solution we reverse the whole array, then reverse the first k elements and 
    finally reverse the second (n-k) elements.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/

export function rotateArray (nums: number[], k:number) : number[] {

    const n = nums.length;
    if (n <= 1) return nums;

    k = k % n;

    function reverse(left:number, right:number) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }

    // Step 1: reverse entire array
    reverse(0, n - 1);

    // Step 2: reverse first k elements
    reverse(0, k - 1);

    // Step 3: reverse remaining elements
    reverse(k, n - 1);

    return nums;
};

console.log(rotateArray([1,2,3,4,5],2))
