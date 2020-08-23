import {RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG} from '../actions/song_actions'

const songReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song.song });
        case RECEIVE_SONGS:
            return action.songs
        case REMOVE_SONG:
            newState = merge({}, state);
            delete newState[action.songId];
            return newState;
        default:
            return state;
    }
}

export default songReducer;