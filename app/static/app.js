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
                <nav className="navbar navbar-toggleable-md  fixed-top">
                    <div className="container">
                        <a className="navbar-brand"  onClick={this.goToIndex}>华人</a>
                        <div className="collapse navbar-collapse" id="top-navbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" tabIndex="0" onClick={this.goToIndex}>
                                         资讯
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" tabIndex="0" onClick={this.goToIndex}>
                                         热议
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" tabIndex="0" onClick={this.goToIndex}>
                                         活动
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" tabIndex="0" onClick={this.goToIndex}>
                                        二手
                                    </a>
                                </li>
                            </ul>
                            {this.props.isAuthenticated ?
                                <ul className="nav navbar-nav navbar-right">
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
                                <ul className="navbar-nav my-2 my-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login"><i className="fa fa-mobile" aria-hidden="true">客户端</i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login"><i className="fa fa-search" aria-hidden="true">搜索</i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">登陆</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">注册</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">投稿</Link>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>

                <div className="content">
                    {this.props.children}
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <h5><img height="16px" alt="36氪" src="//sta.36krcnd.com/common-module/common-header/images/logo.png" />报道未来，服务新生活引领者</h5>
                                <div className="links">            
                                    <a href="http://36kr.com/pages/about" rel="nofollow"><span></span>关于华人</a> |            
                                    <a href="http://krspace.cn/" rel="nofollow">空间</a> |            
                                    <a href="http://hr.36kr.com/" rel="nofollow">加入我们</a> |            
                                    <a href="http://report.36kr.com/" rel="nofollow">寻求报道</a> |          
                                    <a href="http://download.36kr.com/" rel="nofollow">客户端下载</a>       
                                </div>
                                <div className="">

                                </div>
                                <div className="worktime">
                                    工作时间：周一到周五 10:00-19:00
                                </div>
                            </div>
                            <div className="col-md-5 hidden-sm-down">
                                <h5>合作伙伴</h5>
                                <ul className="footer-partner">                
                                    <li>
                                        <a href="http://www.aliyun.com" rel="nofollow"  target="_blank">
                                            <img data-src="//sta.36krcnd.com/36krhome-dev/images/logos/aly.png" height="16px" alt="阿里云" src="//sta.36krcnd.com/36krhome-dev/images/logos/aly.png" />
                                        </a>
                                    </li>                
                                    <li>
                                        <a href="http://qcloud.com" rel="nofollow"  target="_blank">                    
                                            <img data-src="//sta.36krcnd.com/36krhome-dev/images/logos/txyun.png" height="18px" alt="腾讯云" src="//sta.36krcnd.com/36krhome-dev/images/logos/txyun.png"/>
                                        </a>
                                    </li>                
                                    <li>
                                        <a href="http://netease.im/" rel="nofollow" target="_blank"> 
                                            <img data-src="//sta.36krcnd.com/36krhome-dev/images/logos/wyyx.png" height="18px" alt="网易云信" src="//sta.36krcnd.com/36krhome-dev/images/logos/wyyx.png"/>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="http://qiyukf.com/" rel="nofollow"  target="_blank">                    
                                            <img data-src="//sta.36krcnd.com/36krhome-dev/images/logos/wyqiyu.png" height="18px" alt="网易七鱼" src="//sta.36krcnd.com/36krhome-dev/images/logos/wyqiyu.png" />
                                        </a>
                                    </li> 
                                    <li><a href="http://www.umeng.com" rel="nofollow" target="_blank">                    <img data-src="//sta.36krcnd.com/36krhome-dev/images/logos/umeng.png" height="22px" alt="友盟+" src="//sta.36krcnd.com/36krhome-dev/images/logos/umeng.png" /></a></li>
                                    <li><a href="http://getui.com" rel="nofollow"  target="_blank">                    <img data-src="//sta.36krcnd.com/36krhome-dev/images/logos/gt.png" height="20px" alt="个推" src="//sta.36krcnd.com/36krhome-dev/images/logos/gt.png"/></a></li>
                                    <li><a href="http://upyun.com" rel="nofollow" target="_blank">                    <img data-src="//sta.36krcnd.com/36krhome-dev/images/logos/upy.png" height="11px" alt="又拍云" src="//sta.36krcnd.com/36krhome-dev/images/logos/upy.png"/></a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 hidden-sm-down">
                            </div>
                        </div>
                    </div>
                    <div className="bottom">        
                        <div className="container">            
                            <div className="copyright">                
                                <span className="hidden-sm-down">本站由荣豪集团华人分公司提供计算和安全服务
                                </span>                
                                <span className="law">© 2017 华人 |  京ICP备12031756号 | 京ICP证150143号 <span className="mobile-hide">|  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020581" target="_blank">京公网安备11010802020581号</a></span></span>                           
                            </div>            
                            <div className="share">                
                                <a className="iconfooter-weibo" href="http://weibo.com/wow36kr" rel="nofollow"></a>                
                                <a className="iconfooter-twitter" href="https://twitter.com/36kr" rel="nofollow"></a>                
                                <a className="iconfooter-facebook" href="http://www.facebook.com/X36Kr" rel="nofollow"></a>                
                                <a className="iconfooter-rss" href="http://36kr.com/feed" rel="nofollow"></a>            
                            </div>       
                        </div>    
                    </div>
                </footer>
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
