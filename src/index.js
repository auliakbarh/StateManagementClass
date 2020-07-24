import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AboutScreenUseRedux from "./screens/AboutScreen";

export default function (props) {
    return (
        <Provider store={store}>
            <AboutScreenUseRedux />
        </Provider>
    )
}
