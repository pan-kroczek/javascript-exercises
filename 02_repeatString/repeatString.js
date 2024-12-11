const repeatString = function(string, num) {
    let phrase = '';

    if (num < 0) {
        phrase = 'ERROR';
    }
    else {
        for (i = 0; i < num; i++) {
            phrase += string;
        }
    }

    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
