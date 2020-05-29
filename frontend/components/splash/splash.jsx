import React from 'react';
import SongPlayer from '../song_player/song_player';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: ""
        }

        this.handleClick = this.handleClick.bind(this);
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

    render() {
        let count = 0;
        const songList = this.props.songs.map((song) => {
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
                    <div className="trending">
                        <h2>Hear what's trending for free in the royalty free music community </h2>
                    </div>
                    <div className="splash-songs">
                        {songList}
                    </div>
                </div>
                <SongPlayer songUrl={this.state.currentTrack} />
            </>
        )
    }
}

export default Splash;