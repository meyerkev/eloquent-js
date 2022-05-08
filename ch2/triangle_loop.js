function triangle_loop(n) {
    let log_string = "";
    for (let i = 1; i <= n; i++) {
        log_string += "*";
        console.log(log_string);
    }
}
triangle_loop(7);
export {};
