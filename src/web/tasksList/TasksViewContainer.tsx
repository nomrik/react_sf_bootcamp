import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../core/reducers/rootReducer';
import { getSelectedUser, getUsers } from '../../core/selectors/userSelectors';
import { getTasksByUser } from '../../core/selectors/taskSelectors';
import { TaskAction } from '../../core/actionTypes/taskActionTypes';
import { addTask, deleteTask, setTaskIsDone } from '../../core/actionCreators/taskActionCreators';

import TasksViewComponent from './TasksViewComponent';

const mapStateToProps = (state: AppState) => {
    const selectedUser = getSelectedUser(state);
    return {
        tasks: getTasksByUser(state, selectedUser),
        users: getUsers(state),
        selectedUser
    }
}

const mapDispatchToProps = (dispatch: Dispatch<TaskAction>) => {
    return {
        onAddTask: (taskName: string, selectedUser: string) => {
            dispatch(addTask(taskName, selectedUser))
        },
        onDeleteTask: (taskName: string, selectedUser: string) => {
            dispatch(deleteTask(taskName, selectedUser))
        },
        onSetTaskIsDone: (taskName: string) => {
            dispatch(setTaskIsDone(taskName))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksViewComponent);
