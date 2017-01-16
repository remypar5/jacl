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
		<Table items={[{id: 1, name: 'John Doe'}, {id: 2, name: 'Jane Smith'}]} />
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

	it('renders a row for each item', function() {
		const tr = findAllInRenderedTree(defaultTestTableComponent, function(elem) {
			return elem.tagName === 'TR' && elem.parentElement.tagName === 'TBODY';
		});
		expect(tr).to.be.lengthOf(2);
	});

	describe('customizing columns', function() {

		beforeEach(function() {
			this.renderTableComponentWithCustomColumns = function(columns) {
				const items = [{
					id: 1,
					lastname: 'Smith',
					firstname: 'John'
				}, {
					id: 2,
					lastname: 'Doe',
					firstname: 'Jane'
				}];

				return renderComponent(<Table items={items} columns={columns} />);
			}
		});

		it('uses the keys of the first item by default', function() {
			const items = [{
				id: 1,
				lastname: 'Smith',
				firstname: 'John'
			}, {
				id: 2,
				lastname: 'Doe',
				firstname: 'Jane'
			}];

			const table = renderComponent(<Table items={items} />);

			const columnsConfig = table.getColumnsConfig();
			expect(columnsConfig).to.have.deep.property('id.key', 'id');
			expect(columnsConfig).to.have.deep.property('id.label', 'id');
			expect(columnsConfig).to.have.deep.property('lastname.key', 'lastname');
			expect(columnsConfig).to.have.deep.property('lastname.label', 'lastname');
			expect(columnsConfig).to.have.deep.property('firstname.key', 'firstname');
			expect(columnsConfig).to.have.deep.property('firstname.label', 'firstname');
		});

		it('accepts a comma separated string as column input', function() {
			const columns = 'firstname,lastname';
			const table = this.renderTableComponentWithCustomColumns(columns);

			const columnsConfig = table.getColumnsConfig();
			expect(columnsConfig).to.not.have.property('id');
			expect(columnsConfig).to.have.deep.property('lastname.key', 'lastname');
			expect(columnsConfig).to.have.deep.property('lastname.label', 'lastname');
			expect(columnsConfig).to.have.deep.property('firstname.key', 'firstname');
			expect(columnsConfig).to.have.deep.property('firstname.label', 'firstname');
		});

		it('accepts an array of strings as column input', function() {
			const columns = ['firstname', 'lastname'];
			const table = this.renderTableComponentWithCustomColumns(columns);

			const columnsConfig = table.getColumnsConfig();
			expect(columnsConfig).to.not.have.property('id');
			expect(columnsConfig).to.have.deep.property('lastname.key', 'lastname');
			expect(columnsConfig).to.have.deep.property('lastname.label', 'lastname');
			expect(columnsConfig).to.have.deep.property('firstname.key', 'firstname');
			expect(columnsConfig).to.have.deep.property('firstname.label', 'firstname');
		});

		it('accepts an object with string values as column input', function() {
			const columns = {
				id: 'Identity',
				firstname: 'First name',
				lastname: 'Family name'
			};
			const table = this.renderTableComponentWithCustomColumns(columns);

			const columnsConfig = table.getColumnsConfig();
			expect(columnsConfig).to.have.deep.property('id.key', 'id');
			expect(columnsConfig).to.have.deep.property('id.label', 'Identity');
			expect(columnsConfig).to.have.deep.property('lastname.key', 'lastname');
			expect(columnsConfig).to.have.deep.property('lastname.label', 'Family name');
			expect(columnsConfig).to.have.deep.property('firstname.key', 'firstname');
			expect(columnsConfig).to.have.deep.property('firstname.label', 'First name');
		});
	});

	it('renders only the specified columns', function() {
		const table = renderComponent(
			<Table items={[{
					id: 1,
					lastname: 'Doe',
					firstname: 'John',
				}, {
					id: 2,
					lastname: 'Smith',
					firstname: 'Jane',
				}]}
				columns={['lastname', 'firstname']} />
		);
		const th = scryRenderedDOMComponentsWithTag(table, 'th');

		expect(th.length).to.equal(2);
		expect(th[0].textContent).to.equal('lastname');
		expect(th[1].textContent).to.equal('firstname');

		const tbodyTRs = findAllInRenderedTree(table, function(elem) {
			return elem.tagName === 'TR' && elem.parentElement.tagName === 'TBODY';
		});

		expect(tbodyTRs.length).to.equal(2);
		expect(tbodyTRs[0].children.length).to.equal(2);

		expect(tbodyTRs[0].children[0].tagName).to.equal('TD');
		expect(tbodyTRs[0].children[0].textContent).to.equal('Doe');
		expect(tbodyTRs[0].children[1].textContent).to.equal('John');
	});
});
