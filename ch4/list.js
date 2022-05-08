function arrayToList(array) {
    let prev_node = null;
    let front_node = null;
    for (let i = 0; i < array.length; i++) {
        let new_node = { value: array[i], rest: null };
        if (front_node === null) {
            front_node = new_node;
        }
        else {
            prev_node.rest = new_node;
        }
        prev_node = new_node;
    }
    return front_node;
}
function listToArray(list) {
    let array = [];
    let node = list;
    while (node !== null) {
        array.push(node.value);
        node = node.rest;
    }
    return array;
}
function prepend(value, list) {
    return { value, rest: list };
}
function nth(list, index) {
    if (list === null) {
        return -1;
    }
    else if (index === 0) {
        return list.value;
    }
    else {
        return nth(list.rest, index - 1);
    }
}
// Your code here.
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
export {};
// → 20
