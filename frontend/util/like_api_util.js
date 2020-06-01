export const likeSong = (like) =>
    $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { like }
    });

export const fetchLikes = (userId) =>
    $.ajax({
        method: "GET",
        url: "/api/likes",
        data: { userId }
    });