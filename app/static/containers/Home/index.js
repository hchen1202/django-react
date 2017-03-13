/*
 * @Author: Hao 
 * @Date: 2017-03-10 14:49:15 
 * @Last Modified by: Hao
 * @Last Modified time: 2017-03-10 17:26:25
 */


import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <h2></h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Home);

export { Home as HomeNotConnected };

