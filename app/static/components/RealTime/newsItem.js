import React, {Component} from 'react'

export default class NewsItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            showInfo:false
        }
    }

    showInfo(){
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render(){
        const { showInfo } = this.state
        const { news } = this.props
        const newsBackground = {
            backgroundColor:  showInfo? 'white': '#fafafa'
        }
        const rotate = {
            transition: 'all 0.5s ease',
            transform: showInfo? 'rotate(180deg)': ''
        }

        return(
            <li>
                <div className="news-content" style={newsBackground}>
                    <div className="news-title">
                        <h5>{
                            news.title}
                        </h5>
                        <span onClick={()=>this.showInfo()}><i className="fa fa-angle-down" style={rotate} aria-hidden="true"></i></span>
                    </div>
                    {
                        showInfo && <div className="news-info">
                            <p>
                                {news.info}
                            </p>
                        </div>
                    }
                    <div className="news-time">
                        {news.time}
                    </div>
                </div>
            </li>
        )
    }
}