import React from 'react';
import { Link } from 'react-router-dom';
import SongPlayer from '../song_player/song_player';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.shuffleSongs = this.shuffleSongs.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongs();
        this.props.fetchUsers();
    }

    handleClick(e) {
        this.setState({
            currentTrack: e._dispatchInstances.key
        })
    }

    shuffleSongs(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        let count = 0;
        
        const songList = this.shuffleSongs(this.props.songs).map((song) => {
            if (count < 12) {
                count++
                return (
                    <div className="splash-song" key={song.id}>
                        <img className="song-photo" src={song.photoUrl} alt="album cover"/>
                        <i key={song.songUrl} onClick={this.handleClick} className="splash-play-btn far fa-play-circle"></i>
                        <p>{song.title}</p>
                        <p>{this.props.users.map((user) => {
                            if (user.id === song.artist_id) {
                                return user.username 
                            }
                        })}</p>
                    </div>
                )
            }
        });

        return (
            <>
                <div className="full-page-container">
                    <div className="splash-container">
                        <div className="full-splash">
                            <div className="left-splash">
                                <i className="fab fa-mixcloud"></i>
                                <span to="/" className="splash-name">JAECLOUD</span>
                            </div>
                            <div className="right-splash">
                                <button className="login-button splash-button" onClick={() => this.props.openModal('login')}>Sign In</button>
                                <button className="signup-button splash-button" onClick={() => this.props.openModal('signup')}>Create Account</button>
                            </div>
                        </div>
                        <div className="splash-info">
                            <h2>Discover more with JaeCloud Go+</h2>
                            <br />
                            <p>JaeCloud Go+ lets you listen offline, ad-free, with over 150 <br /> million tracks — and growing.</p>
                            <button className="splash-offer" onClick={() => this.props.openModal('signup')}>Start uploading today</button>
                        </div>
                    </div>
                    <div className="splash-search">
                        <input type="search" id="main-search" name="q" placeholder="Search" />
                        <i className="magnify fas fa-search"></i>
                        <p>or</p>
                        <button className="footer-sign-up" onClick={() => this.props.openModal('login')}>Upload your own</button>
                    </div>
                    <div className="trending">
                        <h2>Hear what's trending for free in the royalty free music community </h2>
                    </div>
                    <div className="splash-songs">
                        {songList}
                    </div>
                    <div className="second-splash-image">
                    </div>
                    <div className="splash-footer">
                        <div className="top-foot">
                            <h1>Thanks for listening. Now join in.</h1>
                            <h2>Save tracks, follow artists and build playlists. All for free.</h2>
                            <button className="footer-sign-up" onClick={() => this.props.openModal('signup')}>Create account</button>
                            <div className="foot-session">
                                <p>Already have an account?</p>
                                <button onClick={() => this.props.openModal('login')}>Sign in</button>
                            </div>
                        </div>
                        <div className="bottom-foot">
                            <p><a href="https://github.com/RSchaubeck" target="_blank">Github</a> ⁃ Directory ⁃ About Us ⁃ Jobs ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃ Popular Searches - Privacy - Cookies</p>
                            <p className="last-foot"><Link to="/">Language:</Link> English (US)</p>
                        </div>
                    </div>
                </div>
                <SongPlayer songUrl={this.state.currentTrack} />
            </>
        )
    }
}

export default Splash;