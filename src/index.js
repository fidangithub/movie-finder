import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import filterReducer from "./store/reducers/filter";
import queryReducer from "./store/reducers/query";
import uiReducer from "./store/reducers/ui";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from "redux-saga";

import { watchDiscover } from "./store/sagas/index";

const rootReducers = combineReducers({
    filter: filterReducer,
    query: queryReducer,
    ui: uiReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchDiscover);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
