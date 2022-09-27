let id = Symbol("id");
let id2 = Symbol("id");

console.log(id.description);
//---------------------------------------

let user = {
    name: "Vasya",
};

user[id] = 1;

console.log(user);

//---------------------------------------
let user2 = {
    name: "Vasya",
    [id]: 123,
};

console.log(user2);
//---------------------------------------
for (let key in user2) {
    console.log(user2[key]);
}
//---------------------------------------
let key = Symbol.for("reestrSymbol");
let keyAgain = Symbol.for("reestrSymbol");

console.log( key == keyAgain );

console.log( Symbol.keyFor(key) ); // символ в глобальном реестре символов
console.log( Symbol.keyFor(id) ); // не в реестре