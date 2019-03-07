import { Task } from '../types/taskTypes';

export const ADD_TASK = 'taskActionTypes/ADD_TASK';
export const DELETE_TASK = 'taskActionTypes/DELETE_TASK';

export interface AddTaskAction {
    type: typeof ADD_TASK,
    task: Task
}

export interface DeleteTaskAction {
    type: typeof DELETE_TASK,
    taskName: string,
    userName: string
}

export type TaskAction = AddTaskAction | DeleteTaskAction;