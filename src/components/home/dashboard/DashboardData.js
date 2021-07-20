import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import EmiCalculator from '../emicalculator/EmiCalculator';
import LoanCards from '../../Cards/LoanCards';
import Login from '../Login';
export const DashboardData =[
    {
        title:'EMIcalculator',
        path:'./emicalculator',
        icon:<AiIcons.AiFillCalculator/>,
        className:'nav-text'
    },
    {
        title:'Payments',
        path:'./login',
        icon:<AiIcons.AiFillCalculator/>,
        className:'nav-text'
    },
    {
        title:'Loan Types',
        path:'./LoanCards',
        icon:<AiIcons.AiFillCalculator/>,
        className:'nav-text'
    },
    {
        title:'customers',
        path:'./CustomerComponent',
        icon:<AiIcons.AiFillCalculator/>,
        className:'nav-text'
    }

]
export default DashboardData;