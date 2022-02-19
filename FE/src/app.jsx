import React from 'react';
import ReactDOM from 'react-dom';
import store from './shared/store';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app'),
);
