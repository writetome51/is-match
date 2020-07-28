[![npm version](https://badge.fury.io/js/%40writetome51%2Farrays-match.svg)](https://badge.fury.io/js/%40writetome51%2Farrays-match) ![NpmLicense](https://img.shields.io/npm/l/%40writetome51%2Farrays-match.svg) ![npm](https://img.shields.io/npm/dw/%40writetome51%2Farrays-match.svg)

# arraysMatch(array1, array2): boolean

If `array1` and `array2` match, returns true.  
It automatically handles checking nested arrays too.  The only thing it  
can't do is match arrays that contain objects.

## Examples

	arraysMatch([], []); // true

	arraysMatch(['h', 'j'],  ['h', 'j']); // true

	arraysMatch(['h', 'j'],  ['h', 'j', 'k']); // false

	arraysMatch([1, 2, [3]], [1, 2, [3]]); // true

	arraysMatch([1, 2, [3, [4]]], [1, 2, [3, [4]]]); // true

	arraysMatch([1, 2, [3, [4, 5]]], [1, 2, [3, [4, 8]]]); // false

	arraysMatch([ {prop:1} ], [ {prop:1} ]); // false


## Installation
`npm i  @writetome51/arrays-match`


## Loading
```js
import {arraysMatch} from '@writetome51/arrays-match'; 
```
