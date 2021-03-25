import {isArray} from '@writetome51/is-array-not-array';
import {not} from '@writetome51/not';


// Works for any data type, but really intended for array comparison.

export function isMatch(item1, item2) {
	if (item1 === item2) return true;

	if (isArray(item1) && isArray(item2) && (item1.length === item2.length)) {

		for (let i = 0, length = item1.length; i < length; ++i) {
			if (not(isMatch(item1[i], item2[i]))) return false;
		}
		return true;
	}
	else return false;
}
