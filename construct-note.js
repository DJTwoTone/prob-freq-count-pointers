// Write a function called constructNote, which accepts two strings, 
// a message and some letters. 
// The function should return true if the message can be built with the letters that you are given; 
// otherwise, it should return false.

// Assume that there are only lowercase letters 
// and no space or special characters in both the message and the letters.

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    let msgCount = {};
    let letterCount = {};

    for (let char of letters) {
        letterCount[char] = ++letterCount[char] || 1;
    }
    
    for (let char of msg) {
        msgCount[char] = ++msgCount[char] || 1;
    }

    for (let char in msgCount) {
        if (!letterCount[char]) {
            return false;
        }
        if (msgCount[char] > letterCount[char]) {
            return false;
        }
    }

    return true
}
