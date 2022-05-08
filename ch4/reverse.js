function reverseArray(arr) {
    let reversed_arr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed_arr.push(arr[i]);
    }
    return reversed_arr;
}
function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
export {};
