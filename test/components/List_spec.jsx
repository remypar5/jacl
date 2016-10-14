import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import List from '../../src/components/List';
import {
	renderComponent,
	shallowRenderComponent
} from '../test_utils';

describe('test/components/List_spec.jsx', function() {

	it('renders an <ul> by default', function() {
		const list = shallowRenderComponent(
			<List items={['item1', 'item2']} />
		);

		expect(list.type).to.equal('ul');
		expect(list.props.className).to.contain('list-group');
	});

	it('can render a custom element', function() {
		const list = shallowRenderComponent(
			<List element="ol" items={['item1', 'item2']} />
		);

		expect(list.type).to.equal('ol');
	});

	it('renders a <li> element per item', function() {
		const list = renderComponent(
			<List items={['item1', 'item2']} />
		);

		const listItems = TestUtils.scryRenderedDOMComponentsWithTag(list, 'li');

		expect(listItems.length).to.equal(2);
		expect(listItems[0].tagName).to.equal('LI');
		expect(listItems[0].className.indexOf('list-group-item') >= -1).to.be.true;
		expect(listItems[0].textContent).to.equal('item1');

		expect(listItems[1].tagName).to.equal('LI');
		expect(listItems[1].className.indexOf('list-group-item') >= -1).to.be.true;
		expect(listItems[1].textContent).to.equal('item2');
	});

	it('accepts a custom generateItem function', function() {
		function generateItem(item, key) {
			return (
				<option key={key} value={key}>{item}</option>
			);
		}
		const list = renderComponent(
			<List element="select" items={{val1: 'option1', val2: 'option2'}} generateItem={generateItem} />
		);

		const options = TestUtils.scryRenderedDOMComponentsWithTag(list, 'option');

		expect(options.length).to.equal(2);
		expect(options[0].value).to.equal('val1');
		expect(options[1].value).to.equal('val2');
	});
});
