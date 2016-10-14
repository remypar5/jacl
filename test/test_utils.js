import React from 'react';
import TestUtils from 'react-addons-test-utils';

export function shallowRenderComponent(component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
};

export function renderComponent(component) {
	return TestUtils.renderIntoDocument(component);
};
