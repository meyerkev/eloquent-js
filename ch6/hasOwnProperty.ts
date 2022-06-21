export {};

var someObject = {
    hasOwnProperty: function(lol : any) {
        return true;
    }
};

console.log(someObject.hasOwnProperty("lol"));
console.log(Object.prototype.hasOwnProperty("lol"));

