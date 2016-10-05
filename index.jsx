import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './src/components/Icon';

import cx from 'classnames';

const IconButton = React.createClass({
	getDefaultProps() {
		return {
			icon: 'save',
			title: 'Save'
		};
	},

	getInitialState() {
		return {
			saving: false
		};
	},

	handleClick(e) {
		this.setState({
			saving: true
		});

		setTimeout(() => {
			this.setState({
				saving: false
			});
		}, 1000);
	},

	render() {
		const isSaving = this.state.saving;
		let props = Object.assign({
			className: cx({'fa-spin': isSaving}, this.props.className)
		}, this.props);

		if (isSaving) {
			props.icon = 'spinner';
		}

		return (
			<button type="button" onClick={this.handleClick}>
				<Icon {...props} />
				{props.title}
			</button>
		);
	}
});

ReactDOM.render(
	<IconButton />,
	document.getElementById('app')
);
