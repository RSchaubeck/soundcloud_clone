import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_action';
import { closeModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: "Create Account",
        signedUp: false
    }
}

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Sign In
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);