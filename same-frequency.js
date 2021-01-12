// Write a function called sameFrequency. 
// Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) return false;

    let numObj1 = {};
    let numObj2 = {};

    [...numStr1].forEach(num => {
        numObj1[num] = numObj1[num] + 1 || 1;
    });

    [...numStr2].forEach(num => {
        numObj2[num] = numObj2[num] + 1 || 1;
    });


    for (let key in numObj1) {
        if (numObj1[key] !== numObj2[key]) return false;
    }

    return true;
}
