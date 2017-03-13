/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-10T00:42:25-05:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-10T00:44:20-05:00
*/

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Provider store={this.props.store}>
                    <div>
                        <Router history={this.props.history}>
                            {routes}
                        </Router>
                    </div>
                </Provider>
            </div>
        );
    }
}

/*Root.propTypes = {
    store: React.PropTypes.shape().isRequired,
    history: React.PropTypes.shape().isRequired
};*/
