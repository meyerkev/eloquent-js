export {}

function countBs(str: string): number {
    return countChar(str, "B");
}

function countChar(str: string, char: string): number {
    let count: number = 0;
    for (let i: number = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countBs("kakkerlak"));