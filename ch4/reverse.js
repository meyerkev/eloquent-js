"use strict";
exports.__esModule = true;
function reverseArray(arr) {
    var reversed_arr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed_arr.push(arr[i]);
    }
    return reversed_arr;
}
function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
