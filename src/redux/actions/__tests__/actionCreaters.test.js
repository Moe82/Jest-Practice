import saveComment from 'redux/actions';
import { SAVE_COMMENT } from 'redux/actions/types';

describe('saveComment', () => {
	it('has the correct type', () => {
		let action = saveComment();
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('has the correct payload', () => {
		let comment = 'hello, world';
		let action = saveComment(comment);
		expect(action.payload).toEqual(comment);
	});
});
