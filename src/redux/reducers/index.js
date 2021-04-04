import { combineReducers } from 'redux';
import comments from 'redux/reducers/comments';

export default combineReducers({
	comments: comments,
});
