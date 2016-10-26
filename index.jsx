import React from 'react';
import ReactDOM from 'react-dom';
import Table from './src/components/Table';
import cx from 'classnames';

const classes = ['warning', 'info', 'success', 'default'];

const TableContainer = React.createClass({
	generateItem(item, key, ctx) {
		const className = cx('list-group-item', 'list-group-item-' + classes[key % classes.length]);
		return <div key={key} className={className}>item: {item}</div>;
	},

	render() {
		return (
			<Table items={[{id: 1, name: 'John Smith'}, {id: 2, name: 'Jane Smith'}]} />
		);
	}
});

ReactDOM.render(
	<TableContainer />,
	document.querySelector('#app')
);
