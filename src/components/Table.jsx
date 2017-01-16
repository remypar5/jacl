import React from 'react';
import List from './List';
import * as Utils from '../utils';

export default React.createClass({

	_columnsConfig: undefined,

	propTypes: {
		items: React.PropTypes.arrayOf(			// items: [{foo: 'Foo1', bar: 'Bar1'}, {foo: 'Foo2', bar: 'Bar2}]
			React.PropTypes.object
		).isRequired,
		columns: React.PropTypes.oneOfType([
			React.PropTypes.string,				// CSV e.g. 'foo,bar'
			React.PropTypes.arrayOf(			// e.g. ['foo', 'bar']
				React.PropTypes.string
			),
			React.PropTypes.objectOf(			// e.g. { foo: 'Foo label', bar: 'Bar label' }
				React.PropTypes.string
			),
			React.PropTypes.objectOf(			// e.g. {foo: {label: 'Foo label'}, {bar: {label: 'Bar label', formatter: formatFoo}}}
				React.PropTypes.shape({
					label: React.PropTypes.string.isRequired,
					transform: React.PropTypes.func,
				})
			),
		]),
	},

	render() {
		const items = this.props.items;

		return (
			<table className="table">
				<thead className="table__head">{this.renderTableHead()}</thead>
				<List element="tbody" className="table__body" items={items} generateItem={this.renderTableRow} />
			</table>
		);
	},

	renderTableHead() {
		const columns = this.getColumnsConfig();

		return (
			<tr className="table__row">
				{ Utils.map(columns, (column, columnKey) => {
					return <th key={`column-${columnKey}`}>{column.label}</th>;
				}) }
			</tr>
		);
	},

	renderTableRow(model, modelId) {
		const columns = this.getColumnsConfig();

		return (
			<tr key={`row-${modelId}`} className="table__row">
				{ Utils.map(columns, (column, key) => {
					return (
						<td key={`cell-${modelId}-${key}`} className={`table__cell table__cell--${key}`}>
							{ column.transform ?
								column.transform(key, model, columns) :
								this.getDisplayValue(key, model, columns) }
						</td>
					);
				}) }
			</tr>
		);
	},

	getDisplayValue(columnKey, model, columns) {
		return model[columnKey];
	},

	getColumnsConfig(forceReconfig = false) {
		if (this._columnsConfig && forceReconfig !== true) {
			return this._columnsConfig;
		}

		let columns = this.props.columns;
		let type = typeof columns;
		if (! columns) {
			// If none defined, use keys from first item
			columns = Object.keys(this.props.items[0]);
		}

		if (type === 'string') {
			columns = columns.split(Utils.csvRegex);
		}

		if (Array.isArray(columns)) {
			columns = Object.assign(...columns.map((col) => {
				return {
					[col]: col
				};
			}));
		}

		const defaults = {
			label: true,
			transform: this.getDisplayValue,
		};

		columns = Object.assign({}, ...Utils.map(columns, (item, key, cols) => {
			const col = Object.assign({}, defaults);

			if (typeof item === 'string') {
				col.label = item
			}

			if (item.label === true) {
				col.label = key;
			}

			col.key = key;

			return {
				[key]: col,
			};
		}));

		return this._columnsConfig = columns;
	},

});
