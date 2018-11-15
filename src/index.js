import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxToastr from 'react-redux-toastr';
import Root from './containers/Root';
import Header from './components/Header';
import CategoryHeader from './components/CategoryHeader';
import CategoryContainer from './containers/Category';
import rootReducer from './store/reducers';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './styles/index.css';

const store = createStore(rootReducer);
render(
    <BrowserRouter>
        <Provider store={store}>
            <div className="appWrapper">\
                <Header/>
                <CategoryHeader/>
                <CategoryContainer/>
                <div className="bodyWrapper">
                    <Root/>
                </div>
                <ReduxToastr
                    timeOut={2000}
                    position="bottom-center"
                    preventDuplicates
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    closeOnToastrClick/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);