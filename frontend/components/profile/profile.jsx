import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import SongPlayer from '../song_player/song_player';

class Profile extends React.Component {
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
        const currentUser = this.props.currentUser;
        let count = 0;

        const songList = this.props.songs.map((song) => {
            if (song.artist_id === currentUser.id) {
                count ++;
                return (
                    <div className="song-wrapper" key={song.id}>
                        <div className="profile-image">
                            <span>D</span>
                        </div>
                        <div className="play-song">
                            <div className="song-info">
                                <div>
                                    <button key={song.songUrl} onClick={this.handleClick}><i className="orange far fa-play-circle"></i></button>
                                </div>
                                <div>
                                    <p>{currentUser.username}</p>
                                    <p>{song.title}</p>
                                </div>
                            </div>
                            <div className="song-actions">
                                <button><i className="fas fa-share-square"></i>Share</button>
                                <button><i className="fas fa-pen"></i>Edit</button>
                                <button><i className="far fa-play-circle"></i>Add to Next up</button>
                                <button><i className="fas fa-ellipsis-h"></i>More</button>
                            </div>
                        </div>
                    </div>
                )
            }
        });
        
        return(
            <>
                <Navbar />
                <div className="full-page-container">
                    <div className="profile-head">
                        <span>D</span>
                        <div>
                            <h2>{this.props.currentUser.username}</h2>
                            <p>{this.props.currentUser.username}</p>
                        </div>
                    </div>
                    <div className="profile-links">
                        <Link to="/upload">All</Link>
                        <Link to="/upload">Popular Tracks</Link>
                        <Link to="/upload">Tracks</Link>
                        <Link to="/upload">Albums</Link>
                        <Link to="/upload">Playlists</Link>
                        <Link to="/upload">Reposts</Link>
                    </div>
                    <div className="main-profile-container">
                        <div className="profile-box">
                            <div className="spotlight">
                                <h2>Spotlight (0/5)</h2>
                                <p>Highlight your best tracks and playlists: put them in Spotlight so that your audience will find them first when they visit your profile.</p>
                            </div>
                            <div className="recent-songs">
                                {songList}
                            </div>
                        </div>
                        <div className="sidebar">
                                <div className="user-stats">
                                    <p className="stats">Followers <br /><span>146</span><br /></p>
                                    <p className="stats">Following <br /><span>157</span><br /></p>
                                    <p className="stats">Tracks<br /><span>{count}</span><br /></p>
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
                <SongPlayer songUrl={this.state.currentTrack}/>
            </>
        )
    }
}

export default Profile;