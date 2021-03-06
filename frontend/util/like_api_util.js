export const likeSong = (like) => (
    $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { like }
    })
);

export const fetchLikes = () => (
    $.ajax({
        method: "GET",
        url: "/api/likes"
    })
);

export const removeLike = (likeId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
);