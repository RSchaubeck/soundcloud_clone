import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchSongs } from "../../actions/song_actions";
import Profile from "./profile";

const mapStateToProps = ({ session, entities: { users }, entities: { songs } }) => {
    return {
        currentUser: users[session.id],
        songs: Object.values(songs)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);