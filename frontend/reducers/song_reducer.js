import {RECEIVE_SONG, RECEIVE_SONGS, UPDATE_SONG, REMOVE_SONG, SEND_SONG} from '../actions/song_actions'

const songReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song.song });
        case RECEIVE_SONGS:
            return action.songs
        case UPDATE_SONG:
            return Object.assign({}, state, { [action.song.song.id]: action.song.song });
        case REMOVE_SONG:
            newState = merge({}, state);
            delete newState[action.songId];
            return newState;
        default:
            return state;
    }
}

export default songReducer;