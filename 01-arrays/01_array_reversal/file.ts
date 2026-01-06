/*
    Problem: Reverse a given array
    
    Example: 
    Input= [1,2,3,4,5]
    Output should be [5,4,3,2,1]

    Approach: Initially thinking, by brute force create a new array and push elements to it in the reverse order.
    But for the space complexity becomes O(n).
    Optimal Approach: Use inplace method, try two pointer approach to interchange elements.

    Time Complexity: O(n)
    Space Complexity: O(1)

*/
export function arrayReversal(arr: number[]) : number[] {

    let right:number = arr.length-1;
    let left:number = 0;

    while (right>left){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }

    return arr;
}

// Test
console.log(arrayReversal([1,2,3,4,5]));