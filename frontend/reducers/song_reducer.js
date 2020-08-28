import {RECEIVE_SONG, RECEIVE_SONGS, UPDATE_SONG, REMOVE_SONG} from '../actions/song_actions'

const songReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song.song });
        case RECEIVE_SONGS:
            return action.songs
        case UPDATE_SONG:
            debugger
            return Object.assign({}, state, { [action.song.song.id]: action.song.song });
        case REMOVE_SONG:
            newState = merge({}, state);
            delete newState[action.songId];
            return newState;
        default:
            return state;
    }
}

// return Object.assign({}, state, {
//     data: state.data.map(item => {
//         return item.id === action.payload.id ? action.payload : item;
//     }); // replace matched item and returns the array 
// }); 



export default songReducer;