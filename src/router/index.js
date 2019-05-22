import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './../App.js'
import Login from './../components/login/login'
import Register from './../components/register/register'
export default class 	extends Component {
    render() {
        return (
        	<Router>
	            <Route path='/' exact component={ App } />
	            <Route path='/login' component={ Login } />
	            <Route path='/register' component={ Register } />
	        </Router>
        )
    }
}