import {isArray} from '@writetome51/is-array-not-array';
import {isEmpty} from '@writetome51/is-empty-not-empty';
import {errorIfValuesAreNotArrays} from 'error-if-values-are-not-arrays';
import every from '@arr/every';


// Does not work for arrays that contain objects.

export function arraysMatch(array1, array2) {
	errorIfValuesAreNotArrays([array1, array2]);
	return __arraysMatch(array1, array2);


	function __arraysMatch(array1, array2) {
		if (isEmpty(array1)) return isEmpty(array2);
		if (array1.length !== array2.length) return false;

		return every(array1, (item, index) => {
			let item2 = array2[index];

			if (isArray(item) && isArray(item2)) return __arraysMatch(item, item2);
			else return (item === item2);
		});
	}

}
