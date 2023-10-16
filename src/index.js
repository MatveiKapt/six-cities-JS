import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {offers, cities} from './mock/mock';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} cities={cities}/>
    </Provider>,
    document.querySelector(`#root`)
);
