let range = {
    from: 1,
    to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {
    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
};

let arr = Array.from(range);

console.log(arr);


// Объекты, имеющие индексированные свойства и length, называются псевдомассивами. 
// Они также могут иметь другие свойства и методы, но у них нет встроенных методов массивов.
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
let arr2 = Array.from(arrayLike); 

console.log(arr2);