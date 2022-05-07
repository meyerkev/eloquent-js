"use strict";
exports.__esModule = true;
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
        return false;
    }
    var propsA = Object.keys(a).length;
    var propsB = 0;
    for (var prop in Object.keys(b)) {
        propsB++;
        if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
            return false;
        }
        if (propsB > propsA) {
            return false;
        }
    }
    return propsB === propsA;
}
var obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
