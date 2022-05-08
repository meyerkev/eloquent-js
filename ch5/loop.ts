export {};
function loop(n: number, test_fn: (n: number) => boolean, iter_fn: (n: number) => number, body_fn: Function): void {
    for (let i: number = n; test_fn(i); i = iter_fn(i)) {
        body_fn(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1