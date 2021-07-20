import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Logout extends Component {
    render() {
        return (
            <div>
                <h1>you have been logged out!!!</h1>
                <Link to="/Login">Login Again</Link>
                
            </div>
        )
    }
}
export default Logout;