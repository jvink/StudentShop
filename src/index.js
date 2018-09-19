import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Root from './containers/Root';
import rootReducer from './store/reducers';
import './styles/index.css';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);