import usersReducer from './usersReducer';
import taskReducer from './taskReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users: usersReducer,
    tasks: taskReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;