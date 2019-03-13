import { Task } from '../types/taskTypes';

export const ADD_TASK = 'taskActionTypes/ADD_TASK';
export const DELETE_TASK = 'taskActionTypes/DELETE_TASK';
export const SET_TASK_IS_DONE = 'taskActionTypes/SET_TASK_IS_DONE';

export interface AddTaskAction {
    type: typeof ADD_TASK,
    task: Task
}

export interface DeleteTaskAction {
    type: typeof DELETE_TASK,
    taskName: string,
    userName: string
}

export interface SetTaskIsDoneAction {
    type: typeof SET_TASK_IS_DONE,
    taskName: string
}

export type TaskAction = AddTaskAction | DeleteTaskAction | SetTaskIsDoneAction;