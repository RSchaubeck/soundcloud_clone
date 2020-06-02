import { connect } from 'react-redux';
import { fetchSongs } from "../../actions/song_actions";
import { fetchUsers } from "../../actions/user_actions";
import { likeSong, fetchLikes, removeLike } from '../../actions/like_actions'
import Discover from './discover';

const mapStateToProps = ({ session, entities: { users, songs, likes } }) => {
    let songsCopy = Object.values(songs);
    let reversedSongs = songsCopy.reverse();
    return {
        currentUser: users[session.id],
        users: Object.values(users),
        songs: reversedSongs,
        likes: Object.values(likes)
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