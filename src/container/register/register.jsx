import React, { Component } from 'react'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Register extends Component {
	constructor(props) {
        super(props)
        this.state = {
            type: 'genius'
        }
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    login() {
        this.props.history.push('/login')
    }
    render() {
        const RadioItem = Radio.RadioItem
    	return (
    		<div>
                <h2>注册页面</h2>
                <List>
                    <InputItem>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type === 'genius'}>牛人</RadioItem>
                    <RadioItem checked={this.state.type === 'boss'}>BOSS</RadioItem>
                </List>
                <WingBlank>
                    <Button type="primary" onClick={ this.login }>登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={ this.register }>注册</Button>
                </WingBlank>       
            </div>
    	)
    }
}
export default Register