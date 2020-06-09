import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../navbar/navbar_container";
import SongPlayer from '../song_player/song_player';

class Liked extends  React.Component {
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

        if (el.className.includes("liked")) {
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

    render() {
        const likedSongs = this.props.likes.map((like) => {
            if(like.user_id === this.props.currentUser.id) {
                return (this.props.songs.map((song) => {
                    if(like.song_id === song.id) {
                        console.log(song);
                        return (
                            <div className="discover-song liked-song">
                                <img className="song-photo" src={song.photoUrl} alt="album cover" />
                                <i key={song.songUrl} onClick={this.handleClick} className="splash-play-btn far fa-play-circle"></i>
                                <i key={like.id} onClick={this.handleLike} className={"fas fa-heart liked"}></i>
                                <p>{song.title}</p>
                                <p>{this.props.users.map((user) => {
                                    if (user.id === song.artist_id) {
                                        return user.username
                                    }
                                })}</p>
                            </div>
                        )
                    }
                }));
            }
        });

        return(
            <>
                <Navbar />
                <div className="full-page-container">
                    <div className="likes">
                        {likedSongs}
                    </div>
                </div>
                <SongPlayer songUrl={this.state.currentTrack} />
            </>
        )
    }
}

export default Liked;