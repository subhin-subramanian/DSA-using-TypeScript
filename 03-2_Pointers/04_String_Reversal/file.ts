/*
Problem: 
    Write a function that reverses a string. The input string is given as an array of characters s.
    You must do this by modifying the input array in-place with O(1) extra memory.

    Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Example 2:
		Input: s = ["H","a","n","n","a","h"]
		Output: ["h","a","n","n","a","H"]
    
    Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

Platform: Leetcode

Difficulty: Easy

Approach: Use 2 one pointer (start one at left end and other at right end) and interchange the elements untill
the condition defaults. Since we're using typeScript we have to convert string to array first, since ts don't 
allow to mutate strings.

Time Complexity: O(n)
Space Complexity: O(n), since we're using ts, in js it'll be O(n) since we're not creating a new array.
*/

export function strReversal(str: string): string {
  const arr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');

  let left = 0, right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
}

console.log(strReversal("race a car"));