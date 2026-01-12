/*
  Problem:

  Example 1:
  Input:
  Output:
  Explanation:

  Example 2:
  Input:
  Output:
  Explanation:

  Example 3:
  Input:
  Output:
  Explanation:

  Platform: Leetcode

  Difficulty:

  Approach:

  Time Complexity:
  Space Complexity:
*/
function duplicates(arr) {
    if (arr.length === 0)
        return { Number_of_duplicates: 0, Array_wt_duplicates: arr };
    var i = 0, len = arr.length;
    for (var j = 1; j < len; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    arr = arr.slice(0, i + 1);
    return { Number_of_duplicates: len - (i + 1), Array_wt_duplicates: arr };
}
console.log(duplicates([1, 1, 2, 2, 3]));
