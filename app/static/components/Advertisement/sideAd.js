import React, { Component } from 'react'

import './sideAd.scss'
import SideAdItem from './sideAdItem'

export default class SideAd extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { lists } = this.props
        return(
            <div className="side-ad">
                <span className="red-mark"></span>
                <h3>赞助内容</h3>
                <ul className="lists">
                    {
                        lists.map((list, index)=>{
                            return (
                                <SideAdItem key={index} ad={list}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}