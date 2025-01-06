const fibonacci = function(num) {
    let value = Number(num);
    let array = [1, 1];
  
    if (value === 0) {
      return 0;
    } else if (value < 0) {
      return `OOPS`;
    }
    // create an array consisting of numbers up to num
    for (i = 2; i <= value; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
    // get the value of num's index
    return array.at((value -1));
};

// Do not edit below this line
module.exports = fibonacci;
