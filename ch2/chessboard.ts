export {}

function chessboard(n: number): void {
    for (let i: number = 1; i <= n; i++) {
        let line_string = ""
        for (let j: number = 1; j <= n; j++) {
            if ((i + j) % 2 === 0) {
                line_string += " ";
            } else {
                line_string += "#";
            }
        }
        console.log(line_string);
    }
}

let size = 8;
chessboard(size);