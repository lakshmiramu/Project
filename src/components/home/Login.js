import React, { Component } from 'react'
import {Redirect, Router} from 'react-router-dom'
import {FaUser} from "react-icons/fa"
import {FaUnlock} from "react-icons/fa"
import './login.css';
// import CustomerComponent from '../CustomerComponent';
import Details from '../details/Details';
import Dashboard from './dash/Dashboard';
import { SidebarData } from './dash/SidebarData';
import  Dash from './dashboard/Dash';
class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
        username: '',
        password: '',
        loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        // onChange is an event which is used for the event changes occurring at the time of performing the event
        this.setState({
            [e.target.name]:e.target.value
        })
    }
submitForm(e){
    e.preventDefault()
    // preventDefault cancels the submitting if the default values are not given
    const {username,password} = this.state

    if(username === "kondasonali1815@gmail.com"  && password === "PrasaNNA") {
        this.setState({
            loggedIn: true
            
        })
    }
}
    render() {
        
        if(this.state.loggedIn){
        return <Redirect to="/Dashboard"/>
        // return <Redirect to="/Dash"/>
            // Redirect is used to redirect another page 
            
    }
        
        return (
            
            <div className="login-box" >
                <div className="form">
                <h1>Login</h1>
                <form onSubmit={this.submitForm}>
                <div className="c"><p ><FaUser /></p>
                </div>
                    <input type="text" placeholder = "username" className="a"  name="username" value={this.state.username} onChange={this.onChange}  />
                    <br/>
                    <div className="d"><p><FaUnlock /></p></div>
                    <input type="password" placeholder = "password" className="a"  name="password" value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    <input type="submit" className="b" color="primary" />
                    <br/>
                </form>
            </div>
            </div>
        )
    }
}

export default Login;
