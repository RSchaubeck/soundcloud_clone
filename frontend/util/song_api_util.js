export const fetchSong = (songId) =>
    $.ajax({
        method: "GET",
        url: `/api/songs/${songId}`,
    });

export const fetchSongs = () =>
    $.ajax({
        method: "GET",
        url: "/api/songs",
    });

export const uploadSong = (song) =>
    $.ajax({
        method: "POST",
        url: "/api/songs",
        data: { song }
    });

export const updateSong = (song) =>
    $.ajax({
        method: 'PATCH',
        url: `/api/songs/${song.id}`,
        data: { song }
    });

export const deleteSong = (songId) =>
    $.ajax({
        method: "DELETE",
        url: `/api/songs/${songId}`,
    });