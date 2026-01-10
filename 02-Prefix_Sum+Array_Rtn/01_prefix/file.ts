/*
    Problem: Build a prefix array from a given array, find the sum query

    Example 1:
    Input: numx = [1,2,5,4,7,6,2,5]
    Output: [0,1,3,8,12,19,25,27,32]
    for sum query:
    Input: (prefix,1,3)
    Output: 11

    Difficulty: Easy

    Approach: Create a new array with +1 length, fill with zeros. Start from index 1 and 
    use for loop to create the prefix array

    For build:
    Time Complexity: O(n)
    Space Complexity: O(n) 

    For query:
    Time Complexity: O(1)
    Space Complexity: O(1)
*/

// Function to build a prefix array
export function buildPrefix(nums : number[]) : number[] {
    const prefix = new Array(nums.length+1).fill(0);

    for (let i=1; i<prefix.length; i++){
        prefix[i] = prefix[i-1] + nums[i-1];
    }

    return prefix;
}

//Function to range sum query
export function rangeSum(prefix:number[],start:number,end:number) : number{
    const sum = prefix[end+1] - prefix[start];
    return sum;
}

const prefix = buildPrefix([1,2,5,4,7,6,2,5]);
console.log(prefix);
console.log(rangeSum(prefix,1,3));

