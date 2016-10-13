import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import Icon from '../../src/components/Icon';
import {
	renderComponent,
	shallowRenderComponent
} from '../test_utils';

describe('test/components/Icon_spec.jsx', function() {

	it('is a normal FontAwesome icon by default', function() {
		const icon = shallowRenderComponent(
			<Icon icon="plus" title="Add more" />
		);

		expect(icon.type).to.equal('i');
		expect(icon.props.className.indexOf('fa') > -1).to.be.true;
		expect(icon.props.className.indexOf('fa-plus') > -1).to.be.true;
		expect(icon.props.className.indexOf('fa-fw') === -1).to.be.true;
	});

	it('is decorative', function() {
		const icon = shallowRenderComponent(
			<Icon icon="plus" title="Add more" />
		);

		expect(icon.props['aria-hidden']).to.be.true;
	});

	it('accepts additional attributes', function() {
		const icon = shallowRenderComponent(
			<Icon icon="plus" title="Add more" />
		);

		expect(icon.props.title).to.equal('Add more');
	});

	it('accepts additional classNames', function() {
		const icon = shallowRenderComponent(
			<Icon icon="plus" className="fa-fw fa-2x" />
		);

		expect(icon.props.className.indexOf('fa-fw') > -1).to.be.true;
		expect(icon.props.className.indexOf('fa-2x') > -1).to.be.true;
	});
});
