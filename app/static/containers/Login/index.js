import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DjangoCSRFToken from '../../components/djangoCSRFToken'
import axios from 'axios';


import './login.scss';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username: '',
            password: '',
            email: '',
            csrf_token: ''
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        const csrf_token = this.getCookie('csrftoken')
        this.setState({
            csrf_token: csrf_token
        })

        console.log(csrf_token)
    }

    handleSubmit(){
        console.log('here')
        axios({
            url: '/api/register/',
            method: 'post',
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json',
                "X-CSRFToken": this.state.csrf_token
            },
            data: JSON.stringify({
                'username': this.state.username,
                'password': this.state.password,
                'email': this.state.email,
                'csrfmiddlewaretoken': this.state.csrf_token
            })
        })
        .then(response=>response.json())
        .then(user=>{
            console.log(user)
        })
    }

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    handleChangeName(event) {
        this.setState({username: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePass(event) {
        this.setState({password: event.target.value});
    }

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
                                            <input className="form-control" placeholder="手机号／邮箱" value={this.state.email} onChange={this.handleChangeEmail}/>
                                        </div>
                                         <div className="form-group">
                                            <lable>
                                                <i></i>
                                            </lable>
                                            <input className="form-control" placeholder="用户名" value={this.state.username} onChange={this.handleChangeName}/>
                                        </div>
                                        <div className="form-group">
                                            <lable>
                                                <i></i>
                                            </lable>
                                            <input className="form-control" placeholder="密码" value={this.state.password} onChange={this.handleChangePass}/>
                                        </div>
                                        <div className="form-group">
                                            <a>忘记登录密码</a>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" onClick={this.handleSubmit}>立即登录</button>
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