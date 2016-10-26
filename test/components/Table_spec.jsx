import React from 'react';
import {expect} from 'chai';
import {
	scryRenderedDOMComponentsWithTag,
	findRenderedDOMComponentWithTag,
	findAllInRenderedTree
} from 'react-addons-test-utils';
import {
	renderComponent,
	shallowRenderComponent
} from '../test_utils';
import Table from '../../src/components/Table';

describe('test/components/Table_spec.jsx', function() {
	const defaultTestTableComponent = renderComponent(
		<Table items={[{id: 1, name: 'John Smith'}, {id: 2, name: 'Jane Smith'}]} />
	);

	it('renders a <table> with a <thead> and a <tbody>', function() {
		const table = findRenderedDOMComponentWithTag(defaultTestTableComponent, 'table');
		expect(table.tagName).to.equal('TABLE');
		expect(table.className).to.equal('table');

	});

	it('renders a single <thead> and <tbody> element', function() {
		const thead = findRenderedDOMComponentWithTag(defaultTestTableComponent, 'thead');
		expect(thead.tagName).to.equal('THEAD');

		const tbody = findRenderedDOMComponentWithTag(defaultTestTableComponent, 'tbody');
		expect(tbody.tagName).to.equal('TBODY');
	});

	it('renders a column for each property of the first item', function() {
		const th = scryRenderedDOMComponentsWithTag(defaultTestTableComponent, 'th');

		expect(th.length).to.equal(2);
		expect(th[0].textContent).to.equal('id');
		expect(th[1].textContent).to.equal('name');
	});

	it('renders a row for each item', function() {
		const table = renderComponent(
			<Table items={[{id: 1, name: 'John Smith'}, {id: 2, name: 'Jane Smith'}]} />
		);

		const tr = findAllInRenderedTree(table, function(elem) {
			return elem.tagName === 'TR' && elem.parentElement.tagName === 'TBODY';
		});
		expect(tr.length).to.equal(2);
	});

});
