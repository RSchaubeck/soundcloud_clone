import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const REMOVE_SONG = "REMOVE_SONG";
export const UPDATE_SONG = "UPDATE_SONG";

export const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});

export const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});

export const editSong = (song) => ({
    type: UPDATE_SONG,
    song
});

export const removeSong = (songId) => ({
    type: REMOVE_SONG,
    songId
});

export const fetchSong = songId => dispatch => (
    SongAPIUtil.fetchSong(songId).then(song => (
        dispatch(receiveSong(song))
    ))
);

export const fetchSongs = () => dispatch => (
    SongAPIUtil.fetchSongs().then(songs => (
        dispatch(receiveSongs(songs))
    ))
);

export const updateSong = (song) => dispatch => (
    SongAPIUtil.updateSong(song).then((song) => (
        dispatch(editSong(song))
    ))
);

export const deleteSong = songId => dispatch => (
    SongAPIUtil.deleteSong(songId).then(() => (
        dispatch(removeSong(songId))
    ))
);