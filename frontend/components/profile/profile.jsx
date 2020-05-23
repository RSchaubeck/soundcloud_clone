import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        const currentUser = this.props.currentUser;
        
        const songList = this.props.songs.map((song) => {
            if (song.artist_id === currentUser.id) {
                return (
                    <div className="song-wrapper">
                        <div className="profile-image">
                            <span>D</span>
                        </div>
                        <div className="play-song">
                            <div className="song-info">
                                <p>{currentUser.username}</p>
                                <p>{song.title}</p>
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
                <Navbar currentUser={this.props.currentUser}/>
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
                                    <p className="stats">Tracks<br /><span>1</span><br /></p>
                                </div>
                                <div className="go-mobile">
                                    <p>Go mobile</p>
                                    <p className="haejun">Thanks Haejun</p>
                                    <p><a href="https://github.com/RSchaubeck">Github</a> ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃ Popular searches</p>
                                    <p id="last-foot"><Link to="/">Language:</Link> English (US)</p>                            
                                </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;