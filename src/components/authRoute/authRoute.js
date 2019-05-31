/* 获取用户信息，在决定跳转 */
import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter
class AuthRoute extends Component {
	constructor(props) {
        super(props)
        this.state = {
        }
    }
	componentDidMount() {
		const publicList = ['/login', '/register']
		const pathname = this.props.location.pathname
		const me = this
		if (publicList.indexOf(pathname) > -1) {
			return null
		}
		/* 获取用户信息 */
		axios.get('user/info')
			.then(res => {
				if (res.status === 200) {
					if (res.data.code === 0) {

					} else {
						me.props.history.push('/login')
					}
					console.log(res.data)
				}
			})
		/*
		** 是否登录
		** 现在的url地址 login是不需要跳转的
		** 用户的type身份是牛人还是boss
		** 用户是否完善信息（选择个人头像，个人简介）
		 */
	}
	render() {
		return null
	}
}
export default AuthRoute