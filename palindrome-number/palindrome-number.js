/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('');
    
};

// x = int --> break it down into single digits
// use toString() then split;
// then store it into a variable which is going to be digits
// loop t


//use parseInt from string 