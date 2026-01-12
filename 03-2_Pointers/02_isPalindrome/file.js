/*
    Problem:
        A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
        it reads the same forward and backward. Alphanumeric characters include letters and numbers.
        Given a string s, return true if it is a palindrome, or false otherwise.

        Example 1:
        Input: s = "A man, a plan, a canal: Panama"
        Output: true
        Explanation: "amanaplanacanalpanama" is a palindrome.

        Example 2:
        Input: s = "race a car"
        Output: false
        Explanation: "raceacar" is not a palindrome.

        Example 3:
        Input: s = " "
        Output: true
        Explanation: s is an empty string "" after removing non-alphanumeric characters.
        Since an empty string reads the same forward and backward, it is a palindrome.
        
        Constraints:

        1 <= s.length <= 2 * 105
        s consists only of printable ASCII characters.

    Platform: Leetcode

    Difficulty: Easy

    Approach: Clean the string first, then use one pointer in the start and one at the end and move
        them towards each other while checking they are equal.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right])
            return "".concat(str, " is not a  palindrome");
        left++, right--;
    }
    return "".concat(str, " is a palindrome");
}
;
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
