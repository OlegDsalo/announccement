import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename='announcement'>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

