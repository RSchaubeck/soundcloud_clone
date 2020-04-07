import { connect } from 'react-redux';
import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        signedUp: true
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Create Account
            </button>
        ),
        closeModal, openModal: () => dispatch(closeModal, openModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);