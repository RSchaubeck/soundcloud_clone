import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const songList = this.props.songs.map((song) => {
            return (
                <>
                    <div className="profile-image">
                        <span>D</span>
                    </div>
                    <div className="song-info">
                        <p>{this.props.currentUser.username}</p>
                        <p>{song.title}</p>
                    </div>
                    <div className="song-actions">
                        <button><i class="fas fa-share-square"></i>Share</button>
                        <button><i class="fas fa-pen"></i>Edit</button>
                        <button><i class="far fa-play-circle"></i>Add to Next up</button>
                        <button><i class="fas fa-ellipsis-h"></i>More</button>
                    </div>
                </>
            )
        })
        
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
                                <h2>Recent</h2>
                                {songList}
                            </div>
                        </div>
                        <div className="sidebar">
                                <div className="user-stats">
                                    <span>Followers <br />146</span>
                                    <span>Following <br />157</span>
                                    <span>Tracks<br />12</span>
                                </div>
                                <div className="go-mobile">
                                    <p>Go mobile</p>
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