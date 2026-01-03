/* 
    Problem: Sum of the elements in an array

    Difficulty: Easy

    Approach: Traverse through the array using for loop and accumulate the sum in a variable

    Time Complexity: O(n)
    Space Complexity: O(1)
*/

export function sumOfElements(arr: Array<number>) : number {
    let sum: number = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// Test 
console.log(`Sum of elements is ${sumOfElements([1,2,3,4,5])}`);
