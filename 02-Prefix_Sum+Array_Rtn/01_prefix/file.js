"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPrefix = buildPrefix;
exports.rangeSum = rangeSum;
// Function to build a prefix array
function buildPrefix(nums) {
    var prefix = new Array(nums.length + 1).fill(0);
    for (var i = 1; i < prefix.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
    }
    return prefix;
}
//Function to range sum query
function rangeSum(prefix, start, end) {
    var sum = prefix[end + 1] - prefix[start];
    return sum;
}
var prefix = buildPrefix([1, 2, 5, 4, 7, 6, 2, 5]);
console.log(prefix);
console.log(rangeSum(prefix, 1, 3));
