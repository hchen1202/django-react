/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-08T23:05:38-05:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-10T00:43:54-05:00
*/



import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './root';
import configureStore from './store/configureStore';

const initialState = {};

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render( <Root store={store} history={history}/>, document.getElementById('root'));
