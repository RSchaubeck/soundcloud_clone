import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateSong } from '../../actions/song_actions';
import Edit from './edit';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateSong: (song) => dispatch(updateSong(song)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);