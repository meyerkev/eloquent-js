"use strict";
exports.__esModule = true;
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if ([1, 2, 4, 7, 8, 11, 13, 14].includes(i % 15)) {
            console.log(i);
            continue;
        }
        var output = "";
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
