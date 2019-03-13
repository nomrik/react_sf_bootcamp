import { omit } from 'lodash';

import { TasksState } from '../types/taskTypes';
import { TaskAction, ADD_TASK, DELETE_TASK, SET_TASK_IS_DONE } from '../actionTypes/taskActionTypes';

const initialState : TasksState = {};

export default function taskReducer(state: TasksState = initialState, action: TaskAction) : TasksState {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                [action.task.description]: action.task
            };
        case DELETE_TASK:
            return omit(
                state,
                [action.taskName]
            );
        case SET_TASK_IS_DONE:
            const { taskName } = action;
            return {
                ...state,
                [taskName]: {
                    ...state[taskName],
                    isDone: !state[taskName].isDone
                }
            }
        default:
            return state;
    }
}
