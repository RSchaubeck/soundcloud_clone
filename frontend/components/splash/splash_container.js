import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchSongs } from "../../actions/song_actions";
import Splash from './splash';


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);