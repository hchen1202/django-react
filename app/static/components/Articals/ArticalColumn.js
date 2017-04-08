import React, {Component} from 'react'

import './artical.scss'

export default class ArticalColumn extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {artical} = this.props
        return(
            <div className="row artical-column">
                <div className="col-lg-4">
                    <div className="big-banner">
                        <a>
                            <img className="back-image" src={artical.picture} />
                        </a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h4>{artical.title}</h4>
                    <h5 className="artical-subtitle">{artical.subtitle}</h5>
                </div>
            </div>
        )
    }
}