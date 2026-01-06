/*
    Problem: Find the max and min elements in a given array
    
    Example: 
    Input= [1,2,3,4,5]
    Output should be 1 and 5

    Approach: Track max & min while traversing once.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/

export function minMax(arr:number[]) : {max:number,min:number} | null {
    
    if (arr.length === 0) return null;

    let max:number = arr[0];
    let min:number = arr[0];

    for (let i=1; i<arr.length; i++){

        if (arr[i]>max){
          max = arr[i];
        }

        if (arr[i]<min){
          min = arr[i];
        }
    }

    return { max, min }
}

// Test
console.log(minMax([1,5,7,6,3,2,14,8]));
