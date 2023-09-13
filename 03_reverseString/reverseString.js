const reverseString = function(string) {
    let strToArr = [];
    for (let i = string.length-1; i >= 0; i--){
        strToArr.push(string[i]);
    }
    let newString = strToArr.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;