import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import List from '../../src/components/List';

describe('the List component', function() {

	beforeEach(function() {
		this.renderer = TestUtils.createRenderer();
	});

	describe('rendering', function() {

		beforeEach(function() {
			const list = <List items={['foo', 'bar']} />;

			this.renderer.render(list);
			this.DOM = this.renderer.getRenderOutput();
		});

		it('renders 2 string items', function() {
			const list = this.DOM;

			expect(list.type).to.equal('ul');
			expect(list.props.className.indexOf('list-group') > -1).to.be.true;
		});

	});

});
