export {};

function flatten(arr: any[]): any[] {
    return arr.reduce((flat: any[], toFlatten: any) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
console.log(flatten(arrays));