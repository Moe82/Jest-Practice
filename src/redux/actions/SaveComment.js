import { SAVE_COMMENT } from 'actions/types';

// action creators
export default saveComment = (comment) => {
	return {
		type: SAVE_COMMENT,
		payload: comment,
	};
};
