import React, { Component } from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Login extends Component {
	constructor(props) {
        super(props)
        this.state = {
        }
    	this.register = this.register.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    render() {
    	return (
    		<div>
                <h2>登录页面</h2>
                <WingBlank>
                	<List>
	                    <InputItem>用户名</InputItem>
	                    <WhiteSpace />
	                    <InputItem>密码</InputItem>
	                    <WhiteSpace />
	                </List>
                    <Button type="primary">登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={ this.register }>注册</Button>
                </WingBlank>       
            </div>
    	)
    }
}
export default Login