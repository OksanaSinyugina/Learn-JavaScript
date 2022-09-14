/*
Output a single-linked list in the reverse order.
Make two solutions: using a loop and using a recursion.
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

const printReverseListLoop = (list) => {
    let listCopy = list;
    let listValues = []
    while (listCopy) {
        listValues.push(listCopy.value);
        listCopy = listCopy.next;
    }
    for (let i = listValues.length - 1; i >= 0; i--) {
        console.log(listValues[i])
    }
};

const printReverseListRecursion = (list) => {
    if (list.next) {
        printReverseListRecursion(list.next)
    }
    console.log(list.value);
};

printReverseListLoop(list);
console.log (' ');
printReverseListRecursion(list);
