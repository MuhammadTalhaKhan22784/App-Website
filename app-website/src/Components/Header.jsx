import React from 'react'
import logo2em from '../resources/images/logo2em.svg'
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <header>
        <div className="navbar shadow-sm">
            <div className="container d-flex justify-content-start">
                <span className="navbar-brand d-flex">
                    <img alt="logo" src={logo2em}/>
                    <strong><Link className="brand" to="/">National Blood Donation System</Link></strong>
                </span>
            </div>
        </div>
    </header>
        </>
    )
}

export default Header
