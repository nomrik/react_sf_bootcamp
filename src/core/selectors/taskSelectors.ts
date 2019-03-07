import { AppState } from '../reducers/rootReducer';
import { TasksState, Task } from '../types/taskTypes';
import { getUser } from './userSelectors';

export const getTasks = (state: AppState) : TasksState => state.tasks;
export const getTasksByUser = (state: AppState, userName: string) : Task[] => {
    const user = getUser(state, userName);
    if (!user) {
        return [];
    }
    const allTasks = getTasks(state);
    return user.tasks.map(taskName => allTasks[taskName]);
}
