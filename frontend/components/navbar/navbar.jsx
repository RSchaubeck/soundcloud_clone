import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            clicked: !this.state.clicked
        });
    }

    handleLogOut(e) {
        this.props.logout;
    }

    render() {
        const navDisplay = this.props.currentUser ?
            <div className="full-navbar-container"> 
                <div className="navbar-container" >
                    <div className="left-nav">
                        <NavLink to="/" className="logo"><i className="fab fa-mixcloud"></i></NavLink>
                        <NavLink to="/" className="left-nav-links">Home</NavLink>
                        <NavLink to="/" className="left-nav-links">Stream</NavLink>
                        <NavLink to="/" className="left-nav-links">Library</NavLink>
                    </div>
                    <div className="middle-nav">
                        <input type="search" id="site-search" name="q" placeholder="Search" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="right-nav">
                        <NavLink to="/" className="upgrade-link nav-button links">Upgrade</NavLink>
                        <NavLink className={`nav-upload-link nav-button links ${this.props.rel_hash === "#/upload" ? "clicked" : null}`} to={`/upload`}>Upload</NavLink>
                        <NavLink to={`/users/${this.props.currentUser.id}`} className="profile-button nav-button links">{this.props.currentUser.username}</NavLink> 
                        <i className="fas fa-bell nav-button links"></i>   
                        <i className="fas fa-envelope nav-button links"></i>
                        <i onClick={this.handleClick} className="fas fa-ellipsis-h nav-button links"></i>
                        {this.state.clicked ? <button className="logout-button nav-button" onClick={this.props.logout}>Log Out</button> : null }
                    </div>
                </div>
            </div> 
            :
            <div className="full-navbar-container">
                <div className="navbar-container">
                    <div className="left-nav">
                        <NavLink to="/" className="logo"><i className="fab fa-mixcloud"></i></NavLink>
                        <NavLink to="/" className="left-nav-links">Home</NavLink>
                        <NavLink to="/" className="left-nav-links">Stream</NavLink>
                        <NavLink to="/" className="left-nav-links">Library</NavLink>
                    </div>
                    <div className="middle-nav">
                        <input type="search" id="site-search" name="q" placeholder="Search"/>
                    </div>
                    <div className="right-nav">
                        <button className="login-button nav-button" onClick={() => this.props.openModal('login')}>Sign In</button>
                        <button className="signup-button nav-button" onClick={() => this.props.openModal('signup')}>Create Account</button>
                    </div>
                </div>
            </div>
        ;

        return(
            <>
                {navDisplay}
            </>
        )
    }

}


export default Navbar;