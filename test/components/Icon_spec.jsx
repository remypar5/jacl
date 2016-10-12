import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import Icon from '../../src/components/Icon';

describe('<Icon />', function() {

	beforeEach(function() {
		this.renderer = TestUtils.createRenderer();
	});

	describe('rendering', function() {

		beforeEach(function() {
			const icon = <Icon icon="plus" title="Add more" />;

			this.renderer.render(icon);
			this.DOM = this.renderer.getRenderOutput();
		});

		it('is a normal FontAwesome icon by default', function() {
			const icon = this.DOM;

			expect(icon.type).to.equal('i');
			expect(icon.props.className.indexOf('fa') > -1).to.be.true;
			expect(icon.props.className.indexOf('fa-plus') > -1).to.be.true;
			expect(icon.props.className.indexOf('fa-fw') === -1).to.be.true;
		});

		it('is decorative', function() {
			expect(this.DOM.props['aria-hidden']).to.be.true;
		});

		it('accepts additional attributes', function() {
			const icon = this.DOM;

			expect(icon.props.title).to.equal('Add more');
		});

		it('accepts additional classNames', function() {
			const icon = <Icon icon="plus" className="fa-fw fa-2x" />;
			const renderer = TestUtils.createRenderer();

			renderer.render(icon);

			const DOM = renderer.getRenderOutput();

			expect(DOM.props.className.indexOf('fa-fw') > -1).to.be.true;
			expect(DOM.props.className.indexOf('fa-2x') > -1).to.be.true;
		});
	});
});
