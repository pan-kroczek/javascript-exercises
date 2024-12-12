const removeFromArray = function(array, value1, value2) {
    let myArray = array;
    let newArray = [];
    
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] === value1) {
            newArray = myArray.splice(i, 1);
        }
    }

    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
