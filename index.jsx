import React from 'react';
import ReactDOM from 'react-dom';
import Table from './src/components/Table';
import cx from 'classnames';

const classes = ['warning', 'info', 'success', 'default'];
const columns = [
'lastname,firstname',
['lastname', 'firstname'],
{
	id: 'Identifier',
	lastname: 'Last Name',
	firstname: 'First Name',
},
{
	id: {
		label: 'Identifier',
		transform: (key, model, collection) => {
			return `ID: ${model[key]}`;
		},
	},
	lastname: {
		label: 'Last Name',
		transform: (key, model, collection) => {
			return `LASTNAME: ${model[key]}`;
		},
	},
	firstname: {
		label: 'First Name',
		transform: (key, model, collection) => {
			return `FIRSTNAME: ${model[key]}`;
		},
	},
}];

const TableContainer = React.createClass({
	generateItem(item, key, ctx) {
		const className = cx('list-group-item', 'list-group-item-' + classes[key % classes.length]);
		return <div key={key} className={className}>item: {item}</div>;
	},

	render() {
		return (
			<Table items={[{
					id: 1,
					lastname: 'Doe',
					firstname: 'John',
				}, {
					id: 2,
					lastname: 'Smith',
					firstname: 'Jane',
				}, {
					id: 3,
					lastname: 'Kwant, de',
					firstname: 'Anne',
				}, {
					id: 4,
					lastname: 'Parzinski',
					firstname: 'Remy',
				}]}
				columns={columns[2]}
				 />
		);
	}
});

ReactDOM.render(
	<TableContainer />,
	document.querySelector('#app')
);
