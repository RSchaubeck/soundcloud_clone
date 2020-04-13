import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navDisplay = this.props.currentUser ? 
            <header className="navbar-container" >
                <div className="left-nav">
                    <NavLink to="/" className="logo"><i className="fab fa-mixcloud"></i>JaeCloud</NavLink>
                </div>
                <div className="right-nav">
                    <NavLink className={`nav-upload-link nav-button links ${this.props.rel_hash === "#/upload" ? "clicked" : null}`} to={`/upload`}>Upload</NavLink>
                    <NavLink to="/" className="profile-button nav-button links">{this.props.currentUser.username}</NavLink>              
                    <button className="logout-button nav-button" onClick={this.props.logout}>Log Out</button>
                </div>
            </header>   
            :
            <header className="navbar-container">
                <div className="left-nav">
                    <NavLink to="/" className="logo"><i className="fab fa-mixcloud"></i>JaeCloud</NavLink>
                </div>
                <div className="right-nav">
                    <button className="login-button nav-button" onClick={() => this.props.openModal('login')}>Sign In</button>
                    <button className="signup-button nav-button" onClick={() => this.props.openModal('signup')}>Create Account</button>
                </div>
            </header>
        ;

        return(
            <>
                {navDisplay}
            </>
        )
    }

}


export default Navbar;