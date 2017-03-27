import React, {Component} from 'react'

export default class FacebookLogin extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.initSdk()
    }

    initSdk() {
        const { appId, xfbml, cookie, version, autoLoad } = this.props;
        window.fbAsyncInit = () => {
            window.FB.init({
                version: `v${version}`,
                appId,
                xfbml,
                cookie,
            });
            window.FB.AppEvents.logPageView();
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    checkLoginState = (response) => {
        window.FB.getLoginStatus((response)=>{
            if (response.authResponse) {
                this.responseApi(response.authResponse);
            } else {
                if (this.props.callback) {
                    this.props.callback({ status: response.status });
                }
            }
        });
        
    };

    onClick(){
         FB.login((response)=>{
            // Handle the response object, like in statusChangeCallback() in our demo
            // code.
        });
    }

    render(){
        return(
            <div onClick={()=>this.onClick()}>
            </div>
        )
    }
}

