export {}

function triangle_loop(n: number): void {
    let log_string: string = "";
    for (let i: number = 1; i <= n; i++) {
        log_string += "*";
        console.log(log_string);
    }
    
}

triangle_loop(7);

