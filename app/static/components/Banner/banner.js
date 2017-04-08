import React, {Component} from 'react'

import './banner.scss'

export default class Banner extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {data} = this.props
        return(
            <div className="big-banner">
                <a>
                    <img className="back-image" src={data.picture}/>
                </a>
                <div className="captain">
                    <h4>{data.title}</h4>
                </div>
            </div>
        )
    }
}