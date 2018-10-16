import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Root from './containers/Root';
import Header from './components/Header';
import CategoryHeader from './components/CategoryHeader';
import rootReducer from './store/reducers';
import './styles/index.css';

const store = createStore(rootReducer);

render(
    <BrowserRouter>
        <Provider store={store}>
            <div className="appWrapper">
                <Header/>
                <CategoryHeader/>
                <div className="bodyWrapper">
                    <Root/>
                </div>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);