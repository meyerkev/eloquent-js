var someObject = {
    hasOwnProperty: function (lol) {
        return true;
    }
};
console.log(someObject.hasOwnProperty("lol"));
console.log(Object.prototype.hasOwnProperty("lol"));
export {};
