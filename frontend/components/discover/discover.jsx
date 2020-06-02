import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../navbar/navbar_container";
import SongPlayer from '../song_player/song_player';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: "",
            user_id: this.props.currentUser.id,
            song_id: ""
        }

        // this.handleClick = this.handleClick.bind(this);
        this.handleLike = this.handleLike.bind(this);
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

    handleLike(e) {
        e.preventDefault();
        let like = {
            user_id: this.state.user_id,
            song_id: e._dispatchInstances.key
        };
        this.props.likeSong(like);
    }

    render() {
        let count = 0;

        const songList = this.props.songs.map((song) => {
            if ( count <= 12 && song.artist_id != this.props.currentUser.id) {
                count++
                return (
                    <div className="discover-song" key={song.id}>
                        <img className="song-photo" src={song.photoUrl} alt="album cover" />
                        <i key={song.songUrl} className="splash-play-btn far fa-play-circle"></i>
                        <i key={song.id} onClick={this.handleLike} className="fas fa-heart"></i>
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
                                <h2>New Music Now</h2>
                                <p>The latest hits, updated all the time</p>
                                <div className="discover-songs-wrapper">
                                    {songList.slice(0, 4)}
                                </div>
                            </div>
                            <div className="song-section">
                                <h2>Stay Home</h2>
                                <p>Tunes for isolation and self-care</p>
                                <div className="discover-songs-wrapper">
                                    {songList.slice(4, 8)}
                                </div>
                            </div>
                            <div className="song-section">
                                <h2>SoundCloud Charts</h2>
                                <p>The most played tracks on SoundCloud this week</p>
                                <div className="discover-songs-wrapper">
                                    {songList.slice(8, 12)}
                                </div>
                            </div>
                        </div>
                        <div className=" discover-sidebar sidebar">
                            <div className="user-stats">
                                <p className="stats">Followers <br /><span>146</span><br /></p>
                                <p className="stats">Following <br /><span>157</span><br /></p>
                                <p className="stats">Tracks<br /><span>5</span><br /></p>
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
                {/* <SongPlayer songUrl={this.state.currentTrack} /> */}
            </>
        )
    }
}

export default Discover;