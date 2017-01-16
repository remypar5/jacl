import * as Utils from '../src/utils';
import {expect} from 'chai';

describe('test/utils_spec.js', function() {

	it('Utils.csvRegex', function() {
		const str = 'foo,bar,baz,quux';
		const splitArray = str.split(Utils.csvRegex);

		expect(splitArray).to.be.lengthOf(4);
		expect(splitArray[0]).to.equal('foo');
		expect(splitArray[1]).to.equal('bar');
		expect(splitArray[2]).to.equal('baz');
		expect(splitArray[3]).to.equal('quux');
	});

	describe('Utils.map', function() {

		it('as an Array', function() {
			const singles = [10, 20, 30, 40];
			const doubles = Utils.map(singles, (item) => item * 2);

			expect(doubles).to.be.lengthOf(singles.length);
			expect(doubles[0]).to.equal(20);
			expect(doubles[1]).to.equal(40);
			expect(doubles[2]).to.equal(60);
			expect(doubles[3]).to.equal(80);
		});

		it('as an Object', function() {
			const singles = {
				foo: 10,
				bar: 20,
				baz: 30,
				quux: 40,
			};
			const doubles = Utils.map(singles, (item) => item * 2);

			expect(doubles).to.be.lengthOf(4);
			expect(doubles[0]).to.equal(20);
			expect(doubles[1]).to.equal(40);
			expect(doubles[2]).to.equal(60);
			expect(doubles[3]).to.equal(80);
		});

	});

});
