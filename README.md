# JavaScript Loose Equality Bug

This repository demonstrates a common, yet subtle bug in JavaScript related to loose equality (==) and null handling. The bug arises from JavaScript's type coercion during loose equality comparisons, leading to unexpected results when comparing values with null.

## Bug Description
The provided JavaScript code implements a function `foo` that adds two numbers.  It handles `null` values by returning `null`. However, due to loose equality (==), the function may produce unexpected behavior in certain scenarios.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`
3. Run the code using a JavaScript interpreter (e.g., Node.js).
4. Observe the output. You'll notice the function produces the correct output for most cases but demonstrates unexpected behavior when dealing with null or loosely equal values.

## Solution
The solution involves using strict equality (===) to prevent type coercion.  The solution also explicitly checks for both null and undefined to cover more scenarios. 