/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-10T00:45:52-05:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-10T00:46:35-05:00
*/



import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

export default function configureStore(initialState, history) {
    // Add so dispatched route actions to the history
    const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = applyMiddleware(thunk, reduxRouterMiddleware);

    const createStoreWithMiddleware = compose(
        middleware
    );

    return createStoreWithMiddleware(createStore)(rootReducer, initialState);
}
