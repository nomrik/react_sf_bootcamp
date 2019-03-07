import { omit } from 'lodash';

import { TasksState } from '../types/taskTypes';
import { TaskAction, ADD_TASK, DELETE_TASK } from '../actionTypes/taskActionTypes';

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
        default:
            return state;
    }
}
