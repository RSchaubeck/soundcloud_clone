import { connect } from 'react-redux';
import { fetchSongs } from "../../actions/song_actions";
import { fetchUsers } from "../../actions/user_actions";
import { likeSong, fetchLikes, removeLike } from '../../actions/like_actions'
import Liked from './liked';

const mapStateToProps = ({ session, entities: { users, songs, likes } }) => {
    return {
        currentUser: users[session.id],
        users: Object.values(users),
        songs: Object.values(songs),
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
)(Liked);