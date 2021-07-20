import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';
import CustomerComponent from '../../CustomerComponent';
import EmiCalculator from '../emicalculator/EmiCalculator';
import TableDetails from "../emicalculator/TableDetails";
 export const SidebarData=[
 {
 title:"EMI Calculator",
 icon:<HomeIcon/>,
 link:"/EmiCalculator",
 class:'nav-text'
},
{
 title:"Payments",
 icon:<PaymentIcon/>,
 link:"/payments"
},
{
 title:"Dashboard",
 icon:<DashboardIcon/>,
 link:"/dashboard"
},
{
 title:"Loan Types",
 icon:<ListIcon/>,
 link:"/loantypes"
},
{
 title:"customers",
 icon:<PeopleIcon/>,
 link:"/CustomerComponent"
}
]