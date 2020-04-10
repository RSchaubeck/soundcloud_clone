import React from 'react';

const Splash = ({ currentUser, openModal }) => {
        return(
            <div className="splash-container">
                <div className="full-splash">
                    <div className="left-splash">
                        <i className="fab fa-mixcloud"></i>
                        <span to="/" className="splash-name">JAECLOUD</span>
                    </div>   
                    <div className="right-splash">
                        <button className="login-button splash-button" onClick={() => openModal('login')}>Sign In</button>
                        <button className="signup-button splash-button" onClick={() => openModal('signup')}>Create Account</button>
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
        )
    }

export default Splash;