import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './../App.js'
import Login from './../container/login/login'
import Register from './../container/register/register'

class Routers extends Component {
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

export default Routers