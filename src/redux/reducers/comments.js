import { SAVE_COMMENT } from 'redux/actions/types';

const comments = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
		case SAVE_COMMENT:
			return [...state, action.payload];
	}
};

export default comments;
