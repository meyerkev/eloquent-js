export {};

function reverseArray(arr: any[]): any[] {
    let reversed_arr: any[] = [];
    for (let i: number = arr.length - 1; i >= 0; i--) {
        reversed_arr.push(arr[i]);
    }
    return reversed_arr;
}

function reverseArrayInPlace(arr: any[]): void {
    for (let i: number = 0; i < arr.length / 2; i++) {
        let temp: any = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}