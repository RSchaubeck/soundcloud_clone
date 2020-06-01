import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../navbar/navbar_container";
import SongPlayer from '../song_player/song_player';

class Discover extends React.Component {
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
                        <img className="song-photo" src={song.photoUrl} alt="album cover" />
                        <i key={song.songUrl} onClick={this.handleClick} className="splash-play-btn far fa-play-circle"></i>
                        <i class="fas fa-heart"></i>
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
                <Navbar />
                <div className="full-page-container">
                    <div className="discover-wrapper">
                        <div className="discover-songs">
                            <div className="song-section">
                                <h2></h2>
                                <p></p>
                                <div className="dicover-song-wrapper">
                                    {songList.slice(0, 4)}
                                </div>
                            </div>
                            <div className="song-section">
                                <h2></h2>
                                <p></p>
                                <div className="dicover-song-wrapper">
                                    {songList.slice(4, 8)}
                                </div>
                            </div>
                            <div className="song-section">
                                <h2></h2>
                                <p></p>
                                <div className="dicover-song-wrapper">
                                    {songList.slice(8, 13)}
                                </div>
                            </div>
                        </div>
                        <div className="sidebar">
                            <div className="user-stats">
                                <p className="stats">Followers <br /><span>146</span><br /></p>
                                <p className="stats">Following <br /><span>157</span><br /></p>
                            </div>
                            <div className="go-mobile">
                                <p>Go mobile</p>
                                <p className="haejun">Thanks Haejun</p>
                                <p><a href="https://github.com/RSchaubeck" target="_blank">Github</a> ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃ Popular searches</p>
                                <p className="last-foot"><Link to="/">Language:</Link> English (US)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <SongPlayer songUrl={this.state.currentTrack} />
            </>
        )
    }
}

export default Discover;