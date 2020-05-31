import { connect } from 'react-redux';
import { fetchSongs } from "../../actions/song_actions";
import { fetchUsers } from "../../actions/user_actions";
import Discover from './discover';

const mapStateToProps = ({ session, entities: { users, songs } }) => {
    return {
        currentUser: users[session.id],
        users: Object.values(users),
        songs: Object.values(songs)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Discover);