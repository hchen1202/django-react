import React, { Component } from 'react'

export default class SideAdItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { ad } = this.props
        return(
            <li>
                <div className="ad-thumb">
                    <a>
                        <img src={ad.thumb} />
                    </a>
                </div>
                <div className="ad-content">
                    <a>
                        <h5>{ad.content}</h5>
                    </a>
                </div>
            </li>
        )
    }
}