import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchSong, fetchSongs, deleteSong } from "../../actions/song_actions";
import { fetchLikes } from '../../actions/like_actions'
import { openModal } from '../../actions/modal_actions';
import Profile from "./profile";

const mapStateToProps = ({ session, entities: { users, songs, likes } }) => {
    let likeValues = Object.values(likes);
    let likeCount = likeValues.filter(function(like) {
        return like.user_id === users[session.id].id
    })
    console.log(likeValues);
    return {
        currentUser: users[session.id],
        songs: Object.values(songs),
        likes: likeCount.length
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    deleteSong: (songId) => dispatch(deleteSong(songId)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchLikes: () => dispatch(fetchLikes()),
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
