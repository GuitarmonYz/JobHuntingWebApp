import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import reducer from './reducer';
import login from './container/login/login';
import register from './container/register/register';
import './config'


const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/login' component={login}></Route>
                <Route path='/register' component={register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);