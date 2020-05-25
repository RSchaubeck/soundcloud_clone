import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, openModal, logout }) => {
    let splashDisplay;
    if (currentUser) {
        splashDisplay = <>
                <Link to="/" className="splash-user">{currentUser.username}</Link>
                <button className="logout-button splash-button" onClick={logout}>Log Out</button>
            </>
    } else {
        splashDisplay = <>
                <button className="login-button splash-button" onClick={() => openModal('login')}>Sign In</button>
                <button className="signup-button splash-button" onClick={() => openModal('signup')}>Create Account</button>
            </>
    }

    return(
        <>
            <div className="splash-container">
                <div className="full-splash">
                    <div className="left-splash">
                        <i className="fab fa-mixcloud"></i>
                        <span to="/" className="splash-name">JAECLOUD</span>
                    </div>   
                    <div className="right-splash">
                        {splashDisplay}
                        
                        <a href="/">For Creators</a>
                    </div>  
                </div>           
                <div className="splash-info">
                    <h2>Discover more with JaeCloud Go+</h2>
                    <br />
                    <p>JaeCloud Go+ lets you listen offline, ad-free, with over 150 <br /> million tracks — and growing.</p>
                    <button className="splash-offer">Start uploading today</button>
                </div>          
            </div>
            <div>
                <h2>Hear what's trending for free it the royalty free music community </h2>
            </div>
        </>    
    )
    }

export default Splash;