import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import allreducers from './reducers';
import App from './components/app';

const store = createStore(allreducers);

ReactDOM.render(
     <Provider store="{store}">
         <App/>
     </Provider>,
    document.getElementById('root')
);
