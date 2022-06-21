class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    minus(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
let v1 = new Vector(1, 2);
let v2 = new Vector(2, 3);
let v3 = v1.plus(v2);
let v4 = v1.minus(v2);
[v1, v2, v3, v4].forEach((v) => {
    console.log(`(${v.x}, ${v.y})`);
    console.log(v.length);
}); // 2.23606797749979 3.605551275463989 5.830951894845301 1.4142135623730951
export {};
