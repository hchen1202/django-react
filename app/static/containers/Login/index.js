import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './login.scss';

class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="bg-auth">
                </div>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-8 col-xs-10">
                                <div className="loginForm">
                                    <form>
                                        <legend>
                                            <h2>账号密码登录</h2>
                                            <h4>注册新用户</h4>
                                        </legend>
                                        <div className="form-group">
                                            <lable>
                                                <i></i>
                                            </lable>
                                            <input className="form-control" placeholder="手机号／邮箱"/>
                                        </div>
                                        <div className="form-group">
                                            <lable>
                                                <i></i>
                                            </lable>
                                            <input className="form-control" placeholder="密码"/>
                                        </div>
                                        <div className="form-group">
                                            <a>忘记登录密码</a>
                                        </div>
                                        <button className="btn btn-primary btn-block">立即登录</button>
                                    </form>
                                    <div className="social-auth">
                                        <h5>社交网络登录</h5>
                                        <div className="items">
                                            <a className="item">
                                                <i className="fa fa-weixin fa-3x"></i>
                                            </a>
                                            <a className="item">
                                                <i className="fa fa-weibo fa-3x"></i>
                                            </a>
                                            <a className="item">
                                                <i className="fa fa-facebook-official fa-3x"></i>
                                            </a>
                                        </div>
                                        <div className="qr-pc">
                                            <i className="icon-modal icon-qr-or-pc"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Login);

export { Login as LoginNotConnected };