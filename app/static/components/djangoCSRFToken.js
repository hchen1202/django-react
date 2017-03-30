import React, {Component} from 'react'

export default class DjangoCSRFToken extends Component {
    constructor(props){
        super(props)
        this.state = {
            csrftoken = null
        }
    }

    componentWillMount(){
        this.setState({
            csrftoken: this.getCookie('csrftoken')
        })
    }

    getCookie(){
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                    );
                    break;
                }
            }
        }
        return cookieValue;
    }

    render(){
        const {csrftoken} = this.state
        return React.DOM.input(
            {type:"hidden", name:"csrfmiddlewaretoken", value:csrftoken}
        )
    }
}