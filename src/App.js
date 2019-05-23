import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Button, WhiteSpace } from 'antd-mobile'
import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <h3>Welcome</h3>
                <div>
                    <Link to='/login' className="App-font">登录</Link>
                    <WhiteSpace />
                    <Link to='/register' className="App-font">注册</Link>
                </div>
            </header>
        </div>
    )
}
export default App
