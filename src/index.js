import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mock/mock';

/* const Setting = {
  OFFER_COUNT: 6,
}; */

ReactDOM.render(
    <App offers={offers} />,
    document.querySelector(`#root`)
);
