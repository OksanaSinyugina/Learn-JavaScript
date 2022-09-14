/*
Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.
*/

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

const printListLoop = (list) => {
    let listCopy = list;
    while (listCopy) {
        console.log(listCopy.value);
        listCopy = listCopy.next;
    }
}

const printListRecursion = (list) => {
    console.log(list.value); 
    if (list.next) { 
        printListRecursion(list.next);
    }
}

printListLoop(list);
console.log (' ');
printListRecursion(list);