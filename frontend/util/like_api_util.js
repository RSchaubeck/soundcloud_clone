export const likeSong = like => (
    $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { like }
    })
);

export const fetchLikes = () => (
    $.ajax({
        method: "GET",
        url: "/api/likes",
    })
);