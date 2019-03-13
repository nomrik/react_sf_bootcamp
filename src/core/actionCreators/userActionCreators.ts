import { Users } from '../types/userTypes'
import { 
    ADD_USER,
    AddUserAction, 
    SELECT_USER, 
    SelectUserAction,

    LOAD_USERS,
    LoadUsersAction,
    LOAD_USERS_REQUEST,
    LoadUsersRequestAction,
    LOAD_USERS_SUCCESS,
    LoadUsersSuccessAction,
    LOAD_USERS_FAILURE,
    LoadUsersFailureAction
} from '../actionTypes/userActionTypes';

export function addUser(userName: string) : AddUserAction {
    return {
        type: ADD_USER,
        user: {
            id: userName,
            name: userName,
            tasks: []
        }
    }
}

export function selectUser(userName: string) : SelectUserAction {
    return {
        type: SELECT_USER,
        userName
    }
}

export function loadUsers() : LoadUsersAction {
    return {
        type: LOAD_USERS,
    }
}

export function loadUsersRequest() : LoadUsersRequestAction {
    return {
        type: LOAD_USERS_REQUEST
    }
}

export function loadUsersSuccess(payload: Users) : LoadUsersSuccessAction {
    return {
        type: LOAD_USERS_SUCCESS,
        payload
    }
}

export function loadUsersFailure(error: Error) : LoadUsersFailureAction {
    return {
        type: LOAD_USERS_FAILURE,
        error
    }
}

export default {
    addUser,
    selectUser,
    loadUsers,
    loadUsersRequest,
    loadUsersSuccess,
    loadUsersFailure
}