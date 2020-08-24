import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchSong, fetchSongs, deleteSong } from "../../actions/song_actions";
import { openModal } from '../../actions/modal_actions';
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
    deleteSong: (songId) => dispatch(deleteSong(songId)),
    fetchSongs: () => dispatch(fetchSongs()),
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
