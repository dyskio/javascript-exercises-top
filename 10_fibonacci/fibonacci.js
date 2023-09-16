const fibonacci = function(num) {
    if (num < 0){
        return "OOPS"
    }
    let seq = [0, 1];
    for (let i=2; i < num; i++){
        seq[i] = seq[i-1] + seq[i-2]
    }
    let total = seq[seq.length - 1] + seq[seq.length - 2];
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
