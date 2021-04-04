import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let component;

beforeEach(() => {
	component = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	component.unmount();
});

it('has a text area and button', () => {
	expect(component.find('textarea').length).toEqual(1);
	expect(component.find('button').length).toEqual(1);
});

describe('the text area', () => {
	beforeEach(() => {
		component.find('textarea').simulate('change', {
			target: { value: 'new comment', name: 'comment' },
		});
		component.update();
	});
	it('has a functional text area', () => {
		expect(component.find('textarea').prop('value')).toEqual('new comment');
	});

	it('clears text area after submit', () => {
		component.find('form').simulate('submit');
		component.update();
		expect(component.find('textarea').prop('value')).toEqual('');
	});
});
