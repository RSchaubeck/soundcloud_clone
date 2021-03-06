import React from "react";
import Navbar from "../navbar/navbar_container";
import SongPlayer from '../song_player/song_player';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: "",
            user_id: this.props.currentUser.id
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongs();
        this.props.fetchUsers();
        this.props.fetchLikes();
    }

    handleClick(e) {
        this.setState({
            currentTrack: e._dispatchInstances.key
        });
    }

    handleLike(e) {
        e.preventDefault();
        let el = e.currentTarget;

        if(el.className.includes("liked")) {
            el.classList.remove("liked");
            this.props.removeLike(e._dispatchInstances.key);
        } else {
            let like = {
                user_id: this.state.user_id,
                song_id: e._dispatchInstances.key
            };
            el.classList.add("liked");
            this.props.likeSong(like);
        }
    }

    songCount() {

    }

    render() {
        let count = 0;

        const songList = this.props.songs.map((song) => {
            if ( count <= 13 && song.artist_id !== this.props.currentUser.id) {
                count++
                return (
                    <div className="discover-song">
                        <img className="song-photo" src={song.photoUrl} alt="album cover" />
                        <i key={song.songUrl} onClick={this.handleClick} className="splash-play-btn far fa-play-circle"></i>
                        {this.props.likes.length === 0 ? <i key={song.id} onClick={this.handleLike} className={"fas fa-heart"}></i>
                        :
                        this.props.likes.map((like) => {
                            if (like.song_id === song.id) {
                                console.log(like)
                                return <i key={like.id} onClick={this.handleLike} className={"fas fa-heart liked"}></i>
                            } else {
                                return <i key={song.id} onClick={this.handleLike} className={"fas fa-heart"}></i>
                            }
                        })}
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
                                    {songList.slice(1, 5)}
                                </div>
                            </div>
                            <div className="song-section">
                                <h2>Stay Home</h2>
                                <p>Tunes for isolation and self-care</p>
                                <div className="discover-songs-wrapper">
                                    {songList.slice(5, 9)}
                                </div>
                            </div>
                            <div className="song-section">
                                <h2>SoundCloud Charts</h2>
                                <p>The most played tracks on SoundCloud this week</p>
                                <div className="discover-songs-wrapper">
                                    {songList.slice(9, 13)}
                                </div>
                            </div>
                        </div>
                        <div className=" discover-sidebar sidebar">
                            <div className="user-stats">
                                <p className="stats">Tracks<br /><span>{this.props.count[0]}</span><br /></p>
                                <p className="stats">Liked tracks<br /><span>{this.props.count[1]}</span><br /></p>
                            </div>
                            <div className="go-mobile">
                                <p><a href="https://github.com/RSchaubeck" target="_blank">Github</a> - <a href="https://github.com/RSchaubeck" target="_blank">LinkedIn</a></p>
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