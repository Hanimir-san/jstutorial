`use strict`;

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

let printList = function (list) {
  alert(list.value);
  if (list.next) printList(list.next);
};


let printListIter = function (list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value)
    tmp = tmp.next;
  }
}

let printListReverse = function (list) {
  if (list.next) printListReverse(list);
  alert(list.value);
}


let printListReverseIter = function (list) {
  let elements = [];
  let tmp = list;

  while (tmp) {
    alert(tmp.value)
    tmp = tmp.next;
    elements.push(tmp.next);
  }
  for (let element of elements.reverse()) {
    alert(element);
  }
}

printList(list);
printListReverseIter(list); 