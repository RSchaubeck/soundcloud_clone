import { connect } from 'react-redux';
import UploadPage from "./upload_page";
import { uploadSong } from "../../actions/song_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);