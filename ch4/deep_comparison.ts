export {};

function deepEqual(a: any, b: any): boolean {
    if (a === b) {
        return true;
    }
    if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
        return false;
    }

    let propsA: number = Object.keys(a).length;
    let propsB: number = 0;
    for (let prop in Object.keys(b)) {
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

let obj: object = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true