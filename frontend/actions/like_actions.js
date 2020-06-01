import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like: { like }
});

export const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes
});

export const likeSong = like => (
    LikeAPIUtil.likeSong(like).then((like) => (
        dispatch(receiveLike(like))
    ))
);

export const fetchLikes = userId => dispatch => (
    LikeAPIUtil.fetchLikes(userId).then(likes => (
        dispatch(receiveLikes(likes))
    ))
);
