import React,{Component} from 'react'
import {useHistory } from "react-router-dom";
import Index from '../../containers/Index';
import Details from '../details/Details';
import Login from './Login';
import './home.css';
 function Home() {
     let history=useHistory();
    //  Usehistory is used to push another page
    return (
        <div>
            <h1></h1>
            <button type="button" class="btn btn-dark btn-lg"  onClick={() => {history.push('/Login');}}>Admin</button>
            <button type="button" class="btn btn-dark btn-lg" onClick={() => {history.push('/Index');}}>User</button>
        </div>
    )
}
export default Home;

