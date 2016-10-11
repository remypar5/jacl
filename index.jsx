import React from 'react';
import ReactDOM from 'react-dom';
import List from './src/components/List';

import cx from 'classnames';

function ListContainer(props) {
	return (
		<List items={props.items}>
			<div className="list-group-item">item: $item.text.text</div>
		</List>
	);
};

ReactDOM.render(
	<ListContainer items={[{text: {text: 'hello'}}]} />,
	document.getElementById('app')
);
