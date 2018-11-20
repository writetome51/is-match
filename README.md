To include:

	// if using TypeScript:
	import {arraysMatch} from '@writetome51/arraysMatch'; 
	 // if using ES5 Javascript:
	var arraysMatch = require('@writetome51/arraysMatch').arraysMatch;

arraysMatch(array1, array2): boolean

If array1 and array2 match, returns true.  Else, returns false.
It automatically handles checking nested arrays too.  The only thing it can't do is 
match arrays that contain objects.

Examples:

	arraysMatch([], []); // true

	arraysMatch(['h', 'j'],  ['h', 'j']); // true

	arraysMatch(['h', 'j'],  ['h', 'j', 'k']); // false

	arraysMatch([1, 2, [3]], [1, 2, [3]]); // true

	arraysMatch([1, 2, [3, [4]]], [1, 2, [3, [4]]]); // true

	arraysMatch([1, 2, [3, [4, 5]]], [1, 2, [3, [4, 8]]]); // false

	arraysMatch([ {prop:1} ], [ {prop:1} ]); // false
