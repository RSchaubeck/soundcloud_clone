import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchSongs } from "../../actions/song_actions";
import { fetchUsers } from "../../actions/user_actions";
import Splash from './splash';


const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        songs: Object.values(state.entities.songs)
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);