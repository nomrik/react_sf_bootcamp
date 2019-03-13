import { UsersState } from '../types/userTypes';
import { mapValues } from 'lodash'
import { UserAction, ADD_USER, SELECT_USER, LOAD_USERS_SUCCESS } from '../actionTypes/userActionTypes';
import { TaskAction, ADD_TASK, DELETE_TASK } from '../actionTypes/taskActionTypes';

const initialState: UsersState = {
    users: {},
    selectedUser: ''
};

export default function usersReducer(state: UsersState = initialState, action: UserAction | TaskAction): UsersState {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.user.id]: action.user
                }
            };
        case SELECT_USER:
            return {
                ...state,
                selectedUser: action.userName
            };
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: {
                    ...state.users,
                    ...mapValues(action.payload, user => ({...user, tasks: []}))
                }
            }
        case ADD_TASK: {
            const currentUser = state.users[action.task.user];
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.task.user]: {
                        ...currentUser,
                        tasks: [
                            ...currentUser.tasks,
                            action.task.description
                        ]
                    }
                }
            }
        }
        case DELETE_TASK:
            const currentUser = state.users[action.userName];
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.userName]: {
                        ...currentUser,
                        tasks: currentUser.tasks.filter(task => task !== action.taskName)
                    }
                }
            }
        default:
            return state;
    }
}
