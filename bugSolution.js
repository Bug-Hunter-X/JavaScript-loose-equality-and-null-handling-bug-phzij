function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; 
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(1, '2')); // Error: a and b must be numbers
console.log(foo(undefined, 2)); // null