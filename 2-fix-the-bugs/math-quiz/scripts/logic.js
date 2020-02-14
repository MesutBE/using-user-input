const doMathTests = [
  { name: 'first', args: ['add', 4, 5], expected: 9 },
  { name: 'second', args: ['sub', 4, 5], expected: -1 },
  { name: 'third', args: ['mul', 4, 5], expected: 20 },
  { name: 'fourth', args: ['div', 4, 5], expected: .8 },
  { name: 'fifth', args: ['toad', 4, 5], expected: 'invalid operation' },
];

function doMath(op, a, b) {
  //debugger;
  if (op === 'add') {
    return a + b;
  } else if (op === 'sub') {
    return a - b;
  } else if (op === 'mul') {
    return a * b;
  } else if (op === 'div') {
    return a / b;
  } else {
    return 'invalid operation';
  }
}

testing(doMath, doMathTests);
