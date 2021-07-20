import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom'
import {IconContext} from 'react-icons'

import './dash.css';
import DashboardData from './DashboardData';
function Dash() {
    const [sidebar,setSidebar] = useState(false)

    const showSidebar=() =>setSidebar(!sidebar)
    return (
        <div>
            <IconContext.Provider value={{color:'red'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {DashboardData.map((item,index)=> {
                        return(
                            <li key={index} class= {item.className}>
                                <Link to ={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    {/* {DashboardData.map((val,key) =>{
                        return <li key={key} onClick={() =>{window.location.pathname=val.Link}}>
                            {""}
                            <div>{val.path}</div>{""}
                        </li>
                    }
                    )} */}
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Dash;
