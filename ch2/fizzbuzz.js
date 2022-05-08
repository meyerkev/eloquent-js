function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if ([1, 2, 4, 7, 8, 11, 13, 14].includes(i % 15)) {
            console.log(i);
            continue;
        }
        let output = "";
        if (i % 3 === 0) {
            output += "Fizz";
        }
        ;
        if (i % 5 === 0) {
            output += "Buzz";
        }
        ;
        // Typescript has no great way to conditionally print a newline
        console.log(output);
    }
}
fizzBuzz(100);
export {};
