// Write a function called averagePair. 
// Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array 
// where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === avg) return true;
        if (average < avg) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}
