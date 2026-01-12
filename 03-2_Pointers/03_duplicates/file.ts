/*
  Problem: Given a sorted array of, return the count of duplicate elements in the array and the array without duplicates

  Example 1: 
  Input: [1,1,2,2,3]
  Output: 2,[1,2,3]

  Difficulty: Easy

  Approach: We can use 2 pointers since the array is sorted. Here both the pointers starts from the left.
  One pointer moves with the loop, the other pointer uses to store the unique elements adjacent. 
  At the end use slice to make the array without duplicates.   

  Time Complexity: O(n)
  Space Complexity: O(1)
*/
function duplicates(arr : number[]) : {Number_of_duplicates: number, Array_wt_duplicates: number[]} {
  if (arr.length === 0) return {Number_of_duplicates: 0, Array_wt_duplicates:arr};

  let i = 0, len = arr.length;
  for (let j = 1; j < len; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  arr = arr.slice(0,i+1);

  return {Number_of_duplicates: len-(i+1), Array_wt_duplicates:arr};
}

console.log(duplicates([1,1,2,2,3]));