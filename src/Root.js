import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from 'redux/store';

export default (props) => {
	return <Provider store={store}>{props.children}</Provider>;
};
