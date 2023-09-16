const palindromes = function (inp) {
    // regex unicode punctuation
    const punctuation = /[\p{P}\p{S}]/gu;
    // regex whitespace
    let whitespace = /\s/g;

    // remove whitespace & punctuation
    let clean = inp.replace(whitespace, "");
    clean = clean.replace(punctuation, "");

    // 
    let reversed = clean.split("").reverse().join("");
    
    if (reversed.toLowerCase() === clean.toLowerCase()){
        return true;
    } else {
        return false;
    }

    
};

// Do not edit below this line
module.exports = palindromes;
