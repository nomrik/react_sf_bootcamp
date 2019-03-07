import { 
    ADD_USER,
    AddUserAction, 
    SELECT_USER, 
    SelectUserAction 
} from '../actionTypes/userActionTypes';

export function addUser(userName: string) : AddUserAction {
    return {
        type: ADD_USER,
        user: {
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