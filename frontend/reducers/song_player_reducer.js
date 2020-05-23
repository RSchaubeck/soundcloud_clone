import { RECEIVE_CURRENT_SONG } from '../actions/song_player_actions';

const songPlayerReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song.song });
        default:
            return state;
    }
}

export default songPlayerReducer;