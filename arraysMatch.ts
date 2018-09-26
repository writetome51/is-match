import { isArray, notArray} from 'basic-data-handling/isArray_notArray';
import { isEmpty } from 'basic-data-handling/isEmpty_notEmpty';


// Does not work for arrays that contain objects.

export function arraysMatch(array1, array2): boolean {
	if (notArray(array1) || notArray(array2)) {
		throw new Error('Both parameters must be arrays.');
	}
	return _arraysMatch(array1, array2);


	function _arraysMatch(array1, array2) {
		if (isEmpty(array1)) return isEmpty(array2);
		if (array1.length !== array2.length) return false;

		return array1.every((item, index) => {
			let item2 = array2[index];
			if (isArray(item) && isArray(item2) && item.length === item2.length) {

				return _arraysMatch(item, item2);
			}
			else return (item === item2);
		});
	}

}
