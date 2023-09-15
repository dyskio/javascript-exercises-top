const leapYears = function(year) {
    let isLeap = false;

    // divisible by 4?
    if (year % 4 === 0){
        // under 100?
        if (year < 100){
            isLeap = true;
        }
        // from 100-400?
        else if (year >= 100 && year <= 400){
            // divisible by 100?
            if (year % 100 === 0){
                isLeap = false;
            } 
            else {
                isLeap = true;
            }
        }
        // above 400?
        else if (year > 400){
            // divisible by 100?
            if (year % 100 === 0 && year % 400 === 0){
                isLeap = true;
            } else if (year % 100 !== 0 && year % 400 !== 0){
                isLeap = true;
            }
            else {
                isLeap = false;
            }
        }
    } else {
        //if not divisible by 4
        isLeap = false;
    }
    return isLeap;
};


// Rules:
// Divisible by 4? == Leap Year
// && Divisible by 100? == Not Leap Year
// Unless also Divisible by 400 === Leap Year

// Do not edit below this line
module.exports = leapYears;
