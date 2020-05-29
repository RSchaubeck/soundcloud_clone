import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchSongs();
    }

    handleClick(e) {
        this.setState({
            currentTrack: e._dispatchInstances.key
        })
    }

    render() {
        const songList = this.props.songs.map((song) => {
            return (
                console.log(song)
            )
            });

        return (
            <>
                <div className="splash-container">
                    <div className="full-splash">
                        <div className="left-splash">
                            <i className="fab fa-mixcloud"></i>
                            <span to="/" className="splash-name">JAECLOUD</span>
                        </div>
                        <div className="right-splash">
                            <button className="login-button splash-button" onClick={() => this.props.openModal('login')}>Sign In</button>
                            <button className="signup-button splash-button" onClick={() => this.props.openModal('signup')}>Create Account</button>
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
                    <h2>Hear what's trending for free in the royalty free music community </h2>
                </div>
            </>
        )
    }
}

export default Splash;