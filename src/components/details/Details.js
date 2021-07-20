import React,{Component} from 'react'
import {useHistory } from "react-router-dom";
import CustomerComponent from '../CustomerComponent';
import {Link} from 'react-router-dom'
function Details() {
    let history=useHistory();
    // it will push to another page
   return (
       <div>
           <h1></h1>
           
           <Link to="/CustomerComponent">Customer Details</Link>
       </div>
   )
}
export default Details;