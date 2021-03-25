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

isMatch(['h', 'j'],  ['h', 'j']); // true

isMatch(['h', 'j'],  ['h', 'j', 'k']); // false

isMatch([1, 2, [3]], [1, 2, [3]]); // true

let obj = {prop: 1};
isMatch([obj], [{prop:1}]); // false

isMatch([obj], [obj]); // true

let obj2 = obj;
isMatch([obj], [obj2]); // true
```

## Installation
`npm i  @writetome51/is-match`


## Loading
```js
import {isMatch} from '@writetome51/is-match'; 
```
