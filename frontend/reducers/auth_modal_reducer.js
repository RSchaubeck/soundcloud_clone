import { OPEN_AUTH_MODAL, CLOSE_AUTH_MODAL } from '../actions/modal_actions';

export default function authModalReducer(state = {}, action) {
    switch (action.type) {
        case OPEN_AUTH_MODAL:
            return action.modal;
        case CLOSE_AUTH_MODAL:
            return null;
        default:
            return state;
    }
}