import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import SongPlayer from '../song_player/song_player';
import Edit from '../edit/edit_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: "",
            song: null
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount() {
        this.props.fetchSongs();
    }

    handleClick(e) {
        this.setState({
            currentTrack: e._dispatchInstances.key
        });
    }

    handleDelete(e) {
        this.props.deleteSong(e._dispatchInstances.key);
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
                            <span>{currentUser.username.charAt(0)}</span>
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
                                <button onClick={() => this.props.openModal('edit', song)}><i className="fas fa-pen"></i>Edit</button>
                                <button key={song.id} onClick={this.handleDelete}><i className="fas fa-trash"></i>Delete</button>
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
                        <Link to="/discover">All</Link>
                        <Link to="/liked">Liked Tracks</Link>
                    </div>
                    <div className="main-profile-container">
                        <div className="profile-box">
                            <div className="recent-songs">
                                {songList}
                            </div>
                        </div>
                        <div className="sidebar">
                                <div className="user-stats">
                                    <p className="stats">Tracks<br /><span>{count}</span><br /></p>
                                    <p className="stats">Liked tracks<br /><span>5</span><br /></p>
                                </div>
                                <div className="go-mobile">
                                <p><a href="https://github.com/RSchaubeck" target="_blank">Github</a> - <a href="https://github.com/RSchaubeck" target="_blank">LinkedIn</a> - <a href="https://github.com/RSchaubeck" target="_blank">Angel List</a></p>                            
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