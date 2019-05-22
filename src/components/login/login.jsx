import React, { Component } from 'react'
import { List, InputItem, Toast, Button } from 'antd-mobile'
import { createForm, formShape } from 'rc-form'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent)
let moneyKeyboardWrapProps
if (isIPhone) {
  	moneyKeyboardWrapProps = {
    	onTouchStart: e => e.preventDefault()
  	}
}

class Login extends Component {
	constructor(props) {
        super(props)
        this.state = {
        	hasError: false,
    		value: ''
        }
    }
    static propTypes = {
    	form: formShape
  	}
    onErrorClick = () => {
    	if (this.state.hasError) {
      		Toast.info('Please enter 11 digits')
    	}
  	}
  	onChange = (value) => {
	    if (value.replace(/\s/g, '').length < 11) {
	      	this.setState({
	        	hasError: true
	      	})
	    } else {
	      	this.setState({
	        	hasError: false
	      	})
	    }
	    this.setState({
	      	value
	    })
  	}
  	_submit = () => {
  		this.props.form.validateFields((error, value) => {
      		console.log(error, value)
    	})
  	}
    render() {
    	const { getFieldProps, getFieldError } = this.props.form
    	return (
    		<div>
		        <List renderHeader={() => 'Confirm when typing'}>
		          	<InputItem
		          		{...getFieldProps('phone', {
		          			rules: [{required: true}]
		          		})}
			            type="phone"
			            placeholder="input your phone"
			            error={ this.state.hasError }
			            onErrorClick={ this.onErrorClick }
			            onChange={ this.onChange }
			            value={ this.state.value }
			            moneyKeyboardAlign="left"
			            moneyKeyboardWrapProps={ moneyKeyboardWrapProps }
		          	>
		          		手机号码
		          	</InputItem>
		          	<Button onClick={ this._submit }>验证信息</Button>
		        </List>
		     </div>
    	)
    }
}
export default createForm()(Login)