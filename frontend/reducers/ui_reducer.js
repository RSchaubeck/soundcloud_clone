import { combineReducers } from 'redux';
import modal from './modal_reducer.js';
import songPlayerReducer from './song_player_reducer';

export default combineReducers({
    modal,
    songPlayerReducer
});