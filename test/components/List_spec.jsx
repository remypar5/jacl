import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import List from '../../src/components/List';

describe('<List />', function() {

	function shallowRenderComponent(component) {
		const renderer = TestUtils.createRenderer();

		renderer.render(component);
		return renderer.getRenderOutput();
	};

	function renderComponent(component) {
		return TestUtils.renderIntoDocument(component);
	};

	describe('rendering', function() {

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

	});

});
