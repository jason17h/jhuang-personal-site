import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Main from './components/Main';

import './style/style.scss';

const store = configureStore();;

const jsx = (
    <Provider store={store}>
        <Main />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))