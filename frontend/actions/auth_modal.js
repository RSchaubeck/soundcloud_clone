export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';

export const openAuthModal = modal => {
    return {
        type: OPEN_AUTH_MODAL,
        modal
    };
};

export const closeAuthModal = () => {
    return {
        type: CLOSE_AUTH_MODAL
    };
};