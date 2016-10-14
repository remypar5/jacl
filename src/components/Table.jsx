import React from 'react';
import List from './List';

export default React.createClass({

	propTypes: {
		items: React.PropTypes.arrayOf(
			React.PropTypes.object
		).isRequired,
		columns: React.PropTypes.arrayOf(
			React.PropTypes.string
		)
	},

	render() {
		const items = this.props.items;

		return (
			<table className="table">
				<thead>{this.createHead()}</thead>
				<List element="tbody" items={items} generateItem={this.createBodyRow} />
			</table>
		);
	},

	createHead() {
		const columns = this.props.columns && this.props.columns.length ? this.props.columns : Object.keys(this.props.items[0]);

		return (
			<tr>
				{columns.map((column) => {
					return <th key={column}>{column}</th>;
				})}
			</tr>
		);
	},

	createBodyRow(rowModel, rowNr) {
		return (
			<List key={`row-${rowNr}`} element="tr" items={rowModel} generateItem={this.createBodyCell} />
		);
	},

	createBodyCell(value, key) {
		return (
			<td key={key}>{value}</td>
		);
	},

});
