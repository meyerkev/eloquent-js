function chessboard(n) {
    for (let i = 1; i <= n; i++) {
        let line_string = "";
        for (let j = 1; j <= n; j++) {
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
let size = 8;
chessboard(size);
export {};
