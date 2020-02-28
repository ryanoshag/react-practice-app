import { SET_CURRENT_USER } from './user.consts';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});