const sumAll = function(first, second) {
    if (typeof first !== 'number' || typeof second !== 'number'){
        return "ERROR";
    };

    let first_term = Math.min(first, second);
    let last_term = Math.max(first, second);

    if (first_term < 0 || last_term < 0){
        return "ERROR";
    } else {
        let total = last_term * (last_term + 1) / 2;
        return total;
    }
};

// Formula to calculate sum of integers =
// S = n(a + l)/2

// S = sum of the consecutive integers
// n = number of integers
// a = first term
// l = last term


// Do not edit below this line
module.exports = sumAll;
