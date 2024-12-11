const reverseString = function(phrase) {
    // transfer all characters to an array
    let characters = [];
    
    for (i = 0; i < phrase.length; i++) {
        characters[i] = phrase.charAt(i);
    }

    // create a new array with elements in reverse order
    let reversedCharacters = characters.reverse();
    let newPhrase = '';

    // retrieve characters to form a final string
    for (i = 0; i < reversedCharacters.length; i++) {
        newPhrase += reversedCharacters[i];
    }

    return newPhrase;
};

// Do not edit below this line
module.exports = reverseString;
