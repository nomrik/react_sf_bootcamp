import { AppState } from '../reducers/rootReducer';
import { Users, User } from '../types/userTypes';

export const getUsers = (state: AppState) : Users => state.users.users;
export const getSelectedUser = (state: AppState) : string => state.users.selectedUser;
export const getUser = (state: AppState, userName: string) : User => getUsers(state)[userName];