import React, { Component } from 'react'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../store/reducers/user.redux'

@connect(
    state => state,
    { register }
)

class Register extends Component {
	constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.login = this.login.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    login() {
        this.props.history.push('/login')
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    handleRegister() {
        this.props.register(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem
    	return (
    		<div>
                { this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null }
                <h2>注册页面</h2>
                <List>
                    { this.props.msg ? <p>{this.props.msg}</p> : null }
                    <InputItem
                        onChange={ v => this.handleChange('user', v) }
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={ v => this.handleChange('pwd', v) }
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={ v => this.handleChange('repeatpwd', v) }
                    >确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.state.type === 'genius'}
                        onChange={ () => this.handleChange('type', 'genius') }
                    >牛人</RadioItem>
                    <RadioItem 
                        checked={this.state.type === 'boss'}
                        onChange={ () => this.handleChange('type', 'boss') }
                    >BOSS</RadioItem>
                </List>
                <WingBlank>
                    <Button type="primary" onClick={ this.login }>登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={ this.handleRegister }>注册</Button>
                </WingBlank>       
            </div>
    	)
    }
}
export default Register