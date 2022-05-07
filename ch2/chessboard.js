"use strict";
exports.__esModule = true;
function chessboard(n) {
    for (var i = 1; i <= n; i++) {
        var line_string = "";
        for (var j = 1; j <= n; j++) {
            if ((i + j) % 2 === 0) {
                line_string += " ";
            }
            else {
                line_string += "#";
            }
        }
        console.log(line_string);
    }
}
var size = 8;
chessboard(size);
