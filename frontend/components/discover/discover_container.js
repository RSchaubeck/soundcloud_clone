import { connect } from 'react-redux';
import { fetchSongs } from "../../actions/song_actions";
import { fetchUsers } from "../../actions/user_actions";
import { likeSong } from '../../actions/like_actions'
import Discover from './discover';

const shuffleSongs = (arr) => {
    let a = arr;
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const mapStateToProps = ({ session, entities: { users, songs, likes } }) => {
    return {
        currentUser: users[session.id],
        users: Object.values(users),
        songs: shuffleSongs(Object.values(songs)),
        likes: Object.values(likes)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    likeSong: (like) => dispatch(likeSong(like))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Discover);