import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
const Topnav = () => {
    return (
        <>
            <nav className='top_nav just_btw'>
                <NavLink to='/'>
                    <div className="logo  btn">
                        <h2>A/R</h2>
                    </div>
                </NavLink>
                <ul className='all_center'>
                    <NavLink to='/About'>
                        <li className=' btn'>
                            <i>A</i> <span>about</span>
                        </li></NavLink>
                    <NavLink to='/Projects'>
                        <li className=' btn'>
                            <i>W</i> <span>works</span>
                        </li></NavLink>
                    <NavLink to='/Contact'>
                        <li className=' btn'>
                            <i>C</i> <span>contact</span>
                        </li></NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Topnav
