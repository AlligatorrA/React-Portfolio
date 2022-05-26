import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
const FooterNav = () => {
    return (
        <>
            <div className="footer coln_flex">
                <div className="spacer_half"></div>
                <h1>thanks for visiting</h1>
                <div className="spacer_half"></div>
                <ul className='all_center'>
                    <NavLink to='/'>
                        <li className=' btn'>
                            home
                        </li></NavLink>
                    <NavLink to='/About'>
                        <li className=' btn'>
                            About
                        </li></NavLink>
                    <NavLink to='/Projects'>
                        <li className=' btn'>
                            works
                        </li></NavLink>
                    <NavLink to='/Contact'>
                        <li className=' btn'>
                            contact
                        </li></NavLink>
                </ul>
                <div className="spacer_half"></div>
                <div className="all_center">
                    <ul className="all_center">
                        <li className=' btn'>
                            <a href="https://twitter.com/Aryakkhauj">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li className=' btn'>
                            <a href="https://github.com/AlligatorrA">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li className=' btn'>
                            <a href="https://www.linkedin.com/in/anand-raj-b10599171/">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="spacer_half"></div>
                <h2> no &#169; copyright issues</h2>
            </div>
        </>
    )
}

export default FooterNav