function every(array, test) {
    for (let value of array) {
        if (!test(value)) {
            return false;
        }
    }
    return true;
}
function everySome(array, test) {
    /*
    note to self:
    > [1].some(x=>true)
    true
    > [].some(x=>true)
    false
    */
    return !array.some(value => !test(value));
}
console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([], (n) => n < 10));
// → true
console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log(everySome([1, 3, 5], (n) => n < 10));
console.log(everySome([], (n) => n < 10));
export {};
// → true
