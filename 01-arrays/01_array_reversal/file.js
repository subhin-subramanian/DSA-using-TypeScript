"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayReversal = arrayReversal;
function arrayReversal(arr) {
    var _a;
    var right = arr.length - 1;
    var left = 0;
    while (right > left) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        left++;
        right--;
    }
    return arr;
}
// Test
console.log(arrayReversal([1, 2, 3, 4, 5]));
