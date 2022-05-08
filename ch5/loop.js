function loop(n, test_fn, iter_fn, body_fn) {
    for (let i = n; test_fn(i); i = iter_fn(i)) {
        body_fn(i);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
export {};
// → 3
// → 2
// → 1
