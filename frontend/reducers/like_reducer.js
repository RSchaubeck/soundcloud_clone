import { RECEIVE_LIKE, RECEIVE_LIKES } from '../actions/like_actions';

const likeReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like })
        case RECEIVE_LIKES:
            return action.likes
        default:
            return state 
    }
}

export default likeReducer;