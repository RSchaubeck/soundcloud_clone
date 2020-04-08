import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ currentUser, logout, openModal }) => {
    if (currentUser) {
        return(
            <header className="navbar-container" >
                <NavLink to="/" className="logo">JaeCloud</NavLink>
                <NavLink to="/">{currentUser.username}</NavLink>              
                <button className="logout-button" onClick={logout}>Log Out</button>
            </header>
        )
    } else {
        return(
            <header className="navbar-container">
                <NavLink to="/" className="logo">JaeCloud</NavLink>
                <button className="login-button" onClick={() => openModal('login')}>Sign In</button>
                <button className="signup-button" onClick={() => openModal('signup')}>Create Account</button>
            </header>
        )
    }
}

export default Navbar;