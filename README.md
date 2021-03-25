# isMatch(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item1: any,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item2: any<br>): boolean
 
Works for any data type, but really intended for array comparison.  
The algorithm:
```
function isMatch(item1, item2) {
    if (item1 === item2) return true;

    if (isArray(item1) && isArray(item2) && (item1.length === item2.length)) {

        for (let i = 0, length = item1.length; i < length; ++i) {
            if (not(isMatch( item1[i], item2[i] ))) return false;
        }
        return true;
    }
    else return false;
}
```

## Examples
```js
isMatch([], []); // true

isMatch(['a', 'b'],  ['a', 'b']); // true

isMatch(['a', 'b'],  ['a', 'b', 'c']); // false

isMatch([1, 2, [3]], [1, 2, [3]]); // true

isMatch([1, 2, [3]], [1, 2, [3, []]]); // false

let obj = {prop: 1};
isMatch([obj], [{prop:1}]); // false

let obj2 = obj;
isMatch([obj], [obj2]); // true


// Behaves the same as === operator for primitive types and non-array objects:

isMatch('', ''); // true

isMatch('0', '0'); // true

isMatch('0', 0); // false

isMatch('00', '01'); // false

isMatch(Infinity, Infinity); // true

isMatch(undefined, undefined); // true

let obj = {prop: 1};
isMatch(obj, {prop:1}); // false

let obj2 = obj;
isMatch(obj, obj2); // true
```

## Installation
`npm i  @writetome51/is-match`


## Loading
```js
import {isMatch} from '@writetome51/is-match'; 
```
