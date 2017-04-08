import React, { Component } from 'react'

import NewsItem from './newsItem'

import './realTime.scss'

export default class RealTime extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { lists } = this.props
        return(
            <div className="real-time">
                <span className="red-mark"></span>
                <h3>24小时快讯</h3>
                <span className="more"><a>全部</a></span>
                <ul className="lists">
                    {
                        lists.map((list, index)=>{
                            return (
                                <NewsItem key={index} news={list}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
        
    }
}