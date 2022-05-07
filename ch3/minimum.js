"use strict";
exports.__esModule = true;
exports.minimum = void 0;
function minimum(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}
exports.minimum = minimum;
console.log(minimum(1, 2));
console.log(minimum(2, 1));
console.log(minimum(2, 2));
console.log(minimum("a", "b"));
console.log(minimum("b", "a"));
console.log(minimum("20", 3));
console.log(minimum("20", 22));
console.log(minimum(20, "3"));
