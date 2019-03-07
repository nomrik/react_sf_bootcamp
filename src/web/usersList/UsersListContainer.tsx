import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../core/reducers/rootReducer';
import { getUsers, getSelectedUser } from '../../core/selectors/userSelectors';
import { getTasks } from '../../core/selectors/taskSelectors';
import { addUser, selectUser } from '../../core/actionCreators/userActionCreators';
import { UserAction } from '../../core/actionTypes/userActionTypes';

import UsersListComponent from './UsersListComponent';

const mapStateToProps = (state: AppState) => {
    return {
        users: getUsers(state),
        tasks: getTasks(state),
        selectedUser: getSelectedUser(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => {
    return {
        onAddUser: (userName: string) => {
            dispatch(addUser(userName))
        },
        onSelectUser: (userName: string) => {
            dispatch(selectUser(userName));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersListComponent)
