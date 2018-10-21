Takes 2 arrays as arguments, and if they match, returns true.  Else, returns false.
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
