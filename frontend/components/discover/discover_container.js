import { connect } from 'react-redux';
import { fetchSongs } from "../../actions/song_actions";
import { fetchUsers } from "../../actions/user_actions";
import { likeSong, fetchLikes, removeLike } from '../../actions/like_actions'
import Discover from './discover';

const mapStateToProps = ({ session, entities: { users, songs, likes } }) => {
    let songsCopy = Object.values(songs);
    let likesCopy = Object.values(likes);
    let reversedSongs = songsCopy.reverse();
    let songCount = songsCopy.filter(function(song) {
        return song.artist_id === users[session.id].id
    })
    let likeCount = likesCopy.filter(function (like) {
        return like.user_id === users[session.id].id
    })
    return {
        currentUser: users[session.id],
        users: Object.values(users),
        songs: reversedSongs,
        likes: likesCopy,
        count: [songCount.length, likeCount.length]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    likeSong: (like) => dispatch(likeSong(like)),
    fetchLikes: () => dispatch(fetchLikes()),
    removeLike: (likeId) => dispatch(removeLike(likeId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Discover);