import { connect } from 'react-redux';
import UploadPage from "./upload_page";
import { updateSong } from "../../actions/song_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uploadSong: (formData) => dispatch(updateSong(formData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);