import React from 'react';
import cx from 'classnames';
import _ from 'lodash';

export default React.createClass({

	getDefaultProps() {
		return {
			element: 'ul'
		};
	},

	render() {
		const props = Object.assign({
			className: cx('list-group', this.props.className)
		}, this.props);
		const element = props.element;

		delete props.items;
		delete props.element;
		delete props.generateItem;

		return React.createElement(element, props, this.renderChildren());
	},

	generateItem(item, key, ctx) {
		return <li key={key} className="list-group-item">{item}</li>;
	},

	renderChildren() {
		const generator = this.props.generateItem ? this.props.generateItem : this.generateItem;
		return _.map(this.props.items, generator, this);
	},

});
