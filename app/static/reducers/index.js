/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-10T00:46:25-05:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-10T00:46:33-05:00
*/




import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './auth';

export default combineReducers({
    auth: authReducer,
    routing: routerReducer
});
