import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './../App.js'
import Login from './../container/login/login'
import Register from './../container/register/register'
import AuthRoute from './../components/authRoute/authRoute'
function Boss (argument) {
	return <h1>Boss</h1>
}
class Routers extends Component {
    render() {
        return (
        	<Router>
        		<AuthRoute></AuthRoute>
	            <Route path='/' exact component={ App } />
	            <Route path='/login' component={ Login } />
	            <Route path='/boss' component={ Boss } />
	            <Route path='/register' component={ Register } />
	        </Router>
        )
    }
}

export default Routers