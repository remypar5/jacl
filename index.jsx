import React from 'react';
import ReactDOM from 'react-dom';
import List from './src/components/List';
import cx from 'classnames';

const classes = ['warning', 'info', 'success', 'default'];

const ListContainer = React.createClass({
	generateItem(item, key, ctx) {
		const className = cx('list-group-item', 'list-group-item-' + classes[key % classes.length]);
		return <div key={key} className={className}>item: {item}</div>;
	},

	render() {
		return (
			<List {...this.props} generateItem={this.generateItem} />
		);
	}
});

ReactDOM.render(
	<ListContainer element="section" items={['These', 'are', 'just', 'some', 'items', 'to', 'render',]} />,
	document.querySelector('#app')
);
