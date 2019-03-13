import { User, Users } from '../types/userTypes';

export const ADD_USER = 'userActionTypes/ADD_USER';
export const SELECT_USER = 'userActionTypes/SELECT_USER';

export const LOAD_USERS = 'userActionTypes/LOAD_USERS';
export const LOAD_USERS_REQUEST = 'userActionTypes/LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'userActionTypes/LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'userActionTypes/LOAD_USERS_FAILURE';

export interface AddUserAction {
    type: typeof ADD_USER,
    user: User
}

export interface SelectUserAction {
    type: typeof SELECT_USER,
    userName: string
}

export interface LoadUsersAction {
    type: typeof LOAD_USERS
}

export interface LoadUsersRequestAction {
    type: typeof LOAD_USERS_REQUEST
}

export interface LoadUsersSuccessAction {
    type: typeof LOAD_USERS_SUCCESS,
    payload: Users
}

export interface LoadUsersFailureAction {
    type: typeof LOAD_USERS_FAILURE,
    error: Error
}

export type UserAction = AddUserAction 
                        | SelectUserAction
                        | LoadUsersAction
                        | LoadUsersRequestAction
                        | LoadUsersSuccessAction
                        | LoadUsersFailureAction