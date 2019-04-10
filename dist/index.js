"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
// Does not work for arrays that contain objects.
function arraysMatch(array1, array2) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([array1, array2]);
    return _arraysMatch(array1, array2);
    function _arraysMatch(array1, array2) {
        if (is_empty_not_empty_1.isEmpty(array1))
            return is_empty_not_empty_1.isEmpty(array2);
        if (array1.length !== array2.length)
            return false;
        return array1.every(function (item, index) {
            var item2 = array2[index];
            if (is_array_not_array_1.isArray(item) && is_array_not_array_1.isArray(item2) && item.length === item2.length) {
                return _arraysMatch(item, item2);
            }
            else
                return (item === item2);
        });
    }
}
exports.arraysMatch = arraysMatch;
