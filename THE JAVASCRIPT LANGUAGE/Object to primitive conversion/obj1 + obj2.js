const obj1 = {
    name: "oks",
    age: 24,
};

const obj2 = {
    a: 1,
    b: 2,
};

let summ = obj1 + obj2;

console.log(summ);
console.log(+obj1);

let obj = {
    toString() {
      return "2";
    }
};
  
console.log(obj + 2);