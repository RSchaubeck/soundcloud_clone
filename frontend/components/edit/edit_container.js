import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { fetchSong } from '../../actions/song_actions';
import Edit from './edit';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);