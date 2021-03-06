import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {loadState, saveState} from "./localStorage";
import reducers from './reducers'
import {tweetDataService} from './middleware/DataService';
import App from "./components/App";

const initialState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(tweetDataService))
);

store.subscribe(() => {
    saveState(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('reactView')
);