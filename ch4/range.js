"use strict";
exports.__esModule = true;
function range(min_, max_, step) {
    if (step === undefined) {
        step = 1;
    }
    var range_array = [];
    for (var i = min_; i <= max_; i += step) {
        range_array.push(i);
    }
    return range_array;
}
console.log(range(1, 10));
console.log(range(10, 1));
console.log(range(1, 100, 10));
console.log(range(1, 101, 10));
