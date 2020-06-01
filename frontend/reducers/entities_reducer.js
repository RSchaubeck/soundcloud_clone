import { combineReducers } from 'redux';
import users from './users_reducer';
import songs from './song_reducer';
import likes from './like_reducer'

export default combineReducers({
    users,
    songs,
    likes
});