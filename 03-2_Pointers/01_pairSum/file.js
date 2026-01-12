/*
    Problem: Given a sorted array and a target number, check any pair of number's sum in the array will be equal to the target number.

    Example 1:
    Input: [1, 2, 3, 4, 6], target=6
    Output: true
    Explanation: 2+4 is 6, 2 & 4 is there.

    Example 2:
    Input: [1,2,3], tagest=11
    Output: false
    Explanation: none of the sum equals 11.

    Difficulty: Easy

    Approach: since the array is sorted, star 2 pointers, one from the left and one from the right,
    if the sum is higher- descent the right pointer otherwise accent the left pointer until the size
    condition becomes false

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function pairSum(arr, target) {
    var left = 0, right = arr.length - 1;
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum === target)
            return true;
        if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return false;
}
console.log(pairSum([1, 2, 3, 4, 6], 6));
console.log(pairSum([2, 7, 11, 15], 9));
console.log(pairSum([2, 11, 15], 9));
