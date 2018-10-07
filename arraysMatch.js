"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
// Does not work for arrays that contain objects.
function arraysMatch(array1, array2) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([array1, array2]);
    return _arraysMatch(array1, array2);
    function _arraysMatch(array1, array2) {
        if (isEmpty_notEmpty_1.isEmpty(array1))
            return isEmpty_notEmpty_1.isEmpty(array2);
        if (array1.length !== array2.length)
            return false;
        return array1.every(function (item, index) {
            var item2 = array2[index];
            if (isArray_notArray_1.isArray(item) && isArray_notArray_1.isArray(item2) && item.length === item2.length) {
                return _arraysMatch(item, item2);
            }
            else
                return (item === item2);
        });
    }
}
exports.arraysMatch = arraysMatch;
