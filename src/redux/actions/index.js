import { SAVE_COMMENT } from 'redux/actions/types';

// action creators
const saveComment = (comment) => {
	return {
		type: SAVE_COMMENT,
		payload: comment,
	};
};

export default saveComment;
