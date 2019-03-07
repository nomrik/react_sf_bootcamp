import { User } from '../types/userTypes';

export const ADD_USER = 'userActionTypes/ADD_USER';
export const SELECT_USER = 'userActionTypes/SELECT_USER';

export interface AddUserAction {
    type: typeof ADD_USER,
    user: User
}

export interface SelectUserAction {
    type: typeof SELECT_USER,
    userName: string
}

export type UserAction = AddUserAction | SelectUserAction;