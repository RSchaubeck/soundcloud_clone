import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ currentUser, logout, openModal }) => {
    if (currentUser) {
        return(
            <header className="navbar-container" >
                <div className="left-nav">
                    <NavLink to="/" className="logo"><i className="fab fa-mixcloud"></i>JaeCloud</NavLink>
                </div>
                <div className="right-nav">
                    <NavLink to="/" className="profile-button nav-button">{currentUser.username}</NavLink>              
                    <button className="logout-button nav-button" onClick={logout}>Log Out</button>
                </div>
            </header>
        )
    } else {
        return(
            <header className="navbar-container">
                <div className="left-nav">
                    <NavLink to="/" className="logo"><i className="fab fa-mixcloud"></i>JaeCloud</NavLink>
                </div>
                <div className="right-nav">
                    <button className="login-button nav-button" onClick={() => openModal('login')}>Sign In</button>
                    <button className="signup-button nav-button" onClick={() => openModal('signup')}>Create Account</button>
                </div>
            </header>
        )
    }
}

export default Navbar;