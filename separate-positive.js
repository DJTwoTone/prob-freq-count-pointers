// Write a function called separatePositive 
// which accepts an array of non-zero integers. 
// Separate the positive integers to the left 
// and the negative integers to the right. 
// The positive numbers and negative numbers need not be in sorted order. 
// The problem should be done in place 
// (in other words, do not build a copy of the input array).

// add whatever parameters you deem necessary
function separatePositive(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] < 0 && arr[end] > 0) {

            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        } else {
            if (arr[start] > 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return arr;
}
