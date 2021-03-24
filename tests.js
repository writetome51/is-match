import { arraysMatch } from './index.js';
let emptyArr1 = [];
let emptyArr2 = [];
// Test 1: Make sure it recognizes that 2 empty arrays match:
if (arraysMatch(emptyArr1, emptyArr2))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2: Make sure it recognizes that 1 empty array and 1 populated array don't match:
let populatedArray = [1];
if (arraysMatch(emptyArr1, populatedArray))
    console.log('test 2 FAILED');
else
    console.log('test 2 passed');
// Test 3: Make sure it recognizes 2 arrays with same single item match:
populatedArray = [1];
let populatedArray2 = [1];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: Make sure it recognizes 2 arrays with same first item but different lengths
// don't match:
populatedArray = [1];
populatedArray2 = [1, 2];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 4 FAILED');
else
    console.log('test 4 passed');
// Test 5: Make sure it recognizes 2 arrays with same multiple items match:
populatedArray = [1, 2];
populatedArray2 = [1, 2];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: Make sure it recognizes 2 arrays with same multiple types of items match:
populatedArray = [1, 2, '', false, null];
populatedArray2 = [1, 2, '', false, null];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: Make sure it recognizes 2 arrays with same number of items but not all
// same items don't match:
populatedArray = [1, 2, '', false, null];
populatedArray2 = [1, 2, '', true, null];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 7 FAILED');
else
    console.log('test 7 passed');
// Test 8: Make sure it recognizes 2 arrays match when they both have nested empty arrays:
populatedArray = [1, 2, '', false, null, []];
populatedArray2 = [1, 2, '', false, null, []];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9: Make sure it recognizes 2 arrays don't match when they both have nested
// arrays but only 1 is populated:
populatedArray = [1, 2, '', false, null, []];
populatedArray2 = [1, 2, '', false, null, ['h']];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 9 FAILED');
else
    console.log('test 9 passed');
// Test 10: Make sure it recognizes 2 arrays match when they both have nested
// arrays that have matching nested arrays:
populatedArray = [1, 2, '', false, null, ['h', ['i']]];
populatedArray2 = [1, 2, '', false, null, ['h', ['i']]];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11: Make sure it recognizes 2 arrays don't match when they both have nested
// arrays that have some nested arrays that match and others that do not:
populatedArray = [1, 2, '', false, null, ['h', ['i'], [1, 2, ['']]]];
populatedArray2 = [1, 2, '', false, null, ['h', ['i'], [1, 2, ['h']]]];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 11 FAILED');
else
    console.log('test 11 passed');

// Test 12: Make sure it recognizes 2 arrays match when they both have deeply nested
// arrays that all match:
let littleArr = ['i'];
populatedArray = [1, 2, '', false, null, ['h', littleArr, [1, 2, ['h', [[1, 2, 3]]]]]];
populatedArray2 = [1, 2, '', false, null, ['h', littleArr, [1, 2, ['h', [[1, 2, 3]]]]]];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13: Make sure it recognizes 2 arrays don't match when they both have deeply nested
// arrays that all match except for 1 item at the end:
populatedArray = [1, 2, '', false, null, ['h', ['i'], [1, 2, ['h', [[1, 2, 3, ['a']]]]]]];
populatedArray2 = [1, 2, '', false, null, ['h', ['i'], [1, 2, ['h', [[1, 2, 3, ['a', '']]]]]]];
if (arraysMatch(populatedArray, populatedArray2))
    console.log('test 13 FAILED');
else
    console.log('test 13 passed');
// Test 14: If either argument is not an array, it should trigger error:
let errorsTriggered = 0;
try {
    arraysMatch([], {});
}
catch (e) {
    ++errorsTriggered;
}
try {
    arraysMatch({}, []);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 2)
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
// end of tests.
