export {};

function every(array: Array<any>, test: Function) : boolean{
    for (let value of array) {
        if (!test(value)) {
            return false;
        }
    }
    return true
  }

  function everySome(array: Array<any>, test: Function) : boolean{
    /* 
    note to self:
    > [1].some(x=>true)
    true
    > [].some(x=>true)
    false
    */
    return !array.some(value => !test(value));
  }
  
  console.log(every([1, 3, 5], (n: number) => n < 10));
  // → true
  console.log(every([2, 4, 16], (n: number) => n < 10));
  // → false
  console.log(every([1, 3, 5], (n: number) => n < 10));
  console.log(every([], (n: number) => n < 10));
  // → true
  console.log(everySome([1, 3, 5], (n: number) => n < 10));
  // → true
  console.log(everySome([2, 4, 16], (n: number) => n < 10));
  // → false
  console.log(everySome([1, 3, 5], (n: number) => n < 10));
  console.log(everySome([], (n: number) => n < 10));
  // → true