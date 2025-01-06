const palindromes = function (str) {
    let original = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    // get all letters from original string into an array
    let array = Array.from(original);
    // reverse the array
    let reversed = array.toReversed().join('');
    // compare the reversed string to the original one
    return reversed === original ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
