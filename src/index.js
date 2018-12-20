import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxToastr from 'react-redux-toastr';
import Root from './containers/Root';
import HeaderContainer from './containers/Header';
import CategoryHeader from './components/CategoryHeader';
import CategoryContainer from './containers/Category';
import rootReducer from './store/reducers';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './styles/index.css';

const store = createStore(rootReducer);
let token = localStorage.getItem("USER");
render(
    <BrowserRouter>
        <Provider store={store}>
            <div className="appWrapper">\
                <HeaderContainer token={token}/>
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