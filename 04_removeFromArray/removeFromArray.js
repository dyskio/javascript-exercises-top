const removeFromArray = function(arr, ...remove) {
    let newArray = [];
    for (let i = 0; i < remove.length; i++){
        if (arr.includes(remove[i])){
            let ele = remove[i];
            let index = arr.indexOf(ele);
            arr.splice(index, 1);
        } else {
            continue
        }
    }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;

// expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
