/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-08T23:05:47-05:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-10T00:49:50-05:00
*/


import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { Home } from './containers';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
);
