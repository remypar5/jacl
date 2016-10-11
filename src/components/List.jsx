import React from 'react';
import cx from 'classnames';
import _ from 'lodash';

export default React.createClass({

	getDefaultProps() {
		return {
			element: 'ul'
		};
	},

	renderChildren() {
		const items = this.props.items;
		let listItem = this.props.children;

		return items.map(function generateItem(item) {
			if (! listItem) {
				listItem = <li className="list-group-item">{item}</li>;
			}

			return React.Children.map(listItem, function(child) {
				const props = Object.assign({}, child.props);

				if (typeof props.children === 'string') {
					return ('' + props.children).replace(/(\$item)(\..*)*/, (match, p1, p2, offset, origin) => {
						if (p1) {
							if (p2) {
								return _.get(item, p2.slice(1), match);
							}
							return item;
						}
						return match;
					});
				}
				return child;
			});
		});


		return items.map((item) => {
			return React.Children(listItem)
		});
	},

	render() {

		const props = Object.assign({
			className: cx('list-group')
		}, this.props);
		const element = props.element;

		delete props.items;
		delete props.element;

		return React.createElement(element, props, this.renderChildren(props.items));
			// <element {...props}>
			// 	{this.props.items.map((item) => {
			// 		return this.props.children
			// 	})}
			// </element>
		// );
	}

});
