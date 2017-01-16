/**
 * Match comma's in a text, optionally surrounded by whitespace.
 * Use:
 * <code>var arr = 'foo,bar'.split(csvRegex); // ['foo', 'bar']</code>
 *
 * @type {RegExp}
 */
export const csvRegex = /\t*[,]\t*/g;

/**
 * Map `obj` with mapper function `fn`.
 * Use:
 * <code>var numbersArr = [1, 2, 3, 4, 5];
 * var squaresArr = Utils.map(numbersArr, function(number) {
 * 	return number * number;
 * }); // [1, 4, 9, 16, 25]</code>
 *
 * @param  {Iterable}   obj Iterable object to map
 * @param  {Function} fn  Mapper function, taking arguments: `value`, `key`, `obj`
 * @return {Array}       Mapped version of `obj`
 */
export function map(obj, fn) {
	return Object.keys(obj).map((key) => {
		const value = obj[key];

		return fn(value, key, obj);
	});
};
