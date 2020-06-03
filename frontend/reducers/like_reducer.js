import { RECEIVE_LIKE, RECEIVE_LIKES, DELETE_LIKE } from '../actions/like_actions';

const likeReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like })
        case RECEIVE_LIKES:
            return action.likes
        case DELETE_LIKE:
            let newState = Object.assign({}, state);
            delete newState[action.likeId];
            return newState;
        default:
            return state 
    }
}

export default likeReducer;