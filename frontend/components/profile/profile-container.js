import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchSong, fetchSongs } from "../../actions/song_actions";
import Profile from "./profile";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[ownProps.match.params.userId],
        songs: Object.values(state.entities.songs)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);