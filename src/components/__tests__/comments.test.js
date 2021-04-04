import { default as commentsReducer } from 'redux/reducers/comments';
import { SAVE_COMMENT } from 'redux/actions/types';

it('handles actions of type SAVE_COMMENT', () => {
	let comment = 'this is a comment';
	let action = {
		type: SAVE_COMMENT,
		payload: comment,
	};
	let state = commentsReducer(undefined, action);
	expect(state).toEqual([comment]);
});

it('handles undefined types', () => {
	let HELLO_WORLD = 'hello, world';
	let action = {
		type: HELLO_WORLD,
	};
	let state = commentsReducer(undefined, action);
	expect(state).toEqual([]);
});
