const removeFromArray = function(array, ...theArgs) {

    // note to myself
    // if I understand this correctly
    // array of arguments has to include the value
    // .includes returns a boolean
    // if any of theArgs === value .includes returns true
    // I have to make those false so it's !theArgs.includes(value)
    // array.filter leaves only the arguments that return true
    // all of theArgs are filtered out of the array
    
    return array.filter(value => !theArgs.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
