import React from 'react';
import cx from 'classnames';

export default React.createClass({

	propTypes: {
		icon: React.PropTypes.string.isRequired,
		className: React.PropTypes.string,
		libraryPrefix: React.PropTypes.string,
	},

	getDefaultProps() {
		return {
			'libraryPrefix': 'fa',
			'aria-hidden': true
		};
	},

	render() {
		const props = Object.assign({}, this.props);
		props.className = cx(
				props.libraryPrefix,
				`${props.libraryPrefix}-${props.icon}`,
				props.className);

		delete props.libraryPrefix;

		return (
			<i {...props} />
		);
	},
});
