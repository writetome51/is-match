[![npm version](https://badge.fury.io/js/%40writetome51%2Farrays-match.svg)](https://badge.fury.io/js/%40writetome51%2Farrays-match) ![NpmLicense](https://img.shields.io/npm/l/%40writetome51%2Farrays-match.svg) ![npm](https://img.shields.io/npm/dw/%40writetome51%2Farrays-match.svg)

# arraysMatch(array1, array2): boolean

If `array1` and `array2` match, returns true.  
It automatically handles checking nested arrays.  
How the matching is done:  
if `array1[i] === array2[i]` for every `i` in `array1` and `array2`, it's a match.  
If `array1[i]` and `array2[i]` are both arrays of equal length, they're passed  
into a recursive function call.

## Examples
```js
arraysMatch([], []); // true

arraysMatch(['h', 'j'],  ['h', 'j']); // true

arraysMatch(['h', 'j'],  ['h', 'j', 'k']); // false

arraysMatch([1, 2, [3]], [1, 2, [3]]); // true

let obj = {prop: 1};
arraysMatch([obj], [{prop:1}]); // false

arraysMatch([obj], [obj]); // true

let obj2 = obj;
arraysMatch([obj], [obj2]); // true
```

## Installation
`npm i  @writetome51/arrays-match`


## Loading
```js
import {arraysMatch} from '@writetome51/arrays-match'; 
```
