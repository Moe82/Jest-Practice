import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let component;

beforeEach(() => {
	component = mount(<CommentBox />);
});

afterEach(() => {
	component.unmount();
});

it('has a text area and button', () => {
	expect(component.find('textarea').length).toEqual(1);
	expect(component.find('button').length).toEqual(1);
});

it('has a functional text area', () => {
	component.find('textarea').simulate('change', {
		target: { value: 'new comment', name: 'comment' },
	}); // simulate the actual HTML event (change) and pass mock event object.
	component.update();
	expect(component.find('textarea').prop('value')).toEqual('new comment');
});
