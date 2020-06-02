import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const DELETE_LIKE = "DELETE_LIKE";

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes
});

const deleteLike = likeId => ({
    type: DELETE_LIKE,
    likeId
});

export const likeSong = like => dispatch => (
    LikeAPIUtil.likeSong(like).then((like) => {
        dispatch(receiveLike(like));
    })
);

export const fetchLikes = () => dispatch => (
    LikeAPIUtil.fetchLikes().then(likes => (
        dispatch(receiveLikes(likes))
    ))
);

export const removeLike = likeId => dispatch => (
    LikeAPIUtil.removeLike(likeId).then(like => {
        dispatch(deleteLike(like.id))
    })
);