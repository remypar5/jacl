import React from 'react';
import cx from 'classnames';

export default class JaclIcon extends React.PureComponent {

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
	};

};

JaclIcon.propTypes = {
	icon: React.PropTypes.string.isRequired,
	className: React.PropTypes.string,
	libraryPrefix: React.PropTypes.string,
};

JaclIcon.defaultProps = {
	'libraryPrefix': 'fa',
	'aria-hidden': true
};
