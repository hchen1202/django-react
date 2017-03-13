/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-08T23:05:27-05:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-10T00:44:46-05:00
*/



import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import './styles/main.scss';


class App extends React.Component {

    constructor(props){
        super(props)
    }

    logout = () => {
        //this.props.dispatch(authLogoutAndRedirect());
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {

        return (
            <div className="app">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#top-navbar"
                                    aria-expanded="false"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" tabIndex="0" onClick={this.goToIndex}>
                                Django React Redux Demo
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="top-navbar">
                            {this.props.isAuthenticated ?
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a className="js-go-to-index-button" tabIndex="0" onClick={this.goToIndex}>
                                            <i className="fa fa-home" /> Home
                                        </a>
                                    </li>
                                    <li >
                                        <a className="js-go-to-protected-button"
                                           tabIndex="0"
                                           onClick={this.goToProtected}
                                        >
                                            <i className="fa fa-lock" /> Protected
                                        </a>
                                    </li>
                                    <li>
                                        <a className="js-logout-button" tabIndex="0" onClick={this.logout}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                                :
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a className="js-go-to-index-button" tabIndex="0" onClick={this.goToIndex}>
                                            <i className="fa fa-home" /> Home
                                        </a>
                                    </li>
                                    <li >
                                        <Link className="js-login-button" to="/login">Login</Link>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        pathName: ownProps.location.pathname
    };
};

App.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    children: React.PropTypes.shape().isRequired,
    dispatch: React.PropTypes.func.isRequired,
    pathName: React.PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
export { App as AppNotConnected };
