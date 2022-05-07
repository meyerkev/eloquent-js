export {};

function range(min_: number, max_: number, step?: number): number[] {
    if (step === undefined) {
        step = 1;
    }
    let range_array: number[] = [];
    for (let i: number = min_; i <= max_; i += step) {
        range_array.push(i);
    }
    return range_array;
}

console.log(range(1, 10));
console.log(range(10, 1));
console.log(range(1, 100, 10));
console.log(range(1, 101, 10));

