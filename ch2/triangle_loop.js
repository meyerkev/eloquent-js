"use strict";
exports.__esModule = true;
function triangle_loop(n) {
    var log_string = "";
    for (var i = 1; i <= n; i++) {
        log_string += "*";
        console.log(log_string);
    }
}
triangle_loop(7);
