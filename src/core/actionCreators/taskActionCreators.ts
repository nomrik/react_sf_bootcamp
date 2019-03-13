import {
    ADD_TASK,
    AddTaskAction,
    DELETE_TASK,
    DeleteTaskAction,
    SET_TASK_IS_DONE,
    SetTaskIsDoneAction
} from '../actionTypes/taskActionTypes';

export function addTask(taskName: string, userName: string) : AddTaskAction {
    return {
        type: ADD_TASK,
        task: {
            description: taskName,
            user: userName,
            isDone: false
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

export function setTaskIsDone(taskName: string) : SetTaskIsDoneAction {
    return {
        type: SET_TASK_IS_DONE,
        taskName
    }
}