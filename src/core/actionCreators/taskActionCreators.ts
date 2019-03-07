import {
    ADD_TASK,
    AddTaskAction,
    DELETE_TASK,
    DeleteTaskAction
} from '../actionTypes/taskActionTypes';

export function addTask(taskName: string, userName: string) : AddTaskAction {
    return {
        type: ADD_TASK,
        task: {
            description: taskName,
            user: userName,
        }
    }
}

export function deleteTask(taskName: string, userName: string) : DeleteTaskAction {
    return {
        type: DELETE_TASK,
        taskName,
        userName
    }
}