import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './counter/ducks';
import { rootSaga } from './counter/ducks'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
