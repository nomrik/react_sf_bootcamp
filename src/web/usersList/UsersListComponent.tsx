import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import TaskListItem, { TaskSize } from '../common/TaskListItem';
import { Users } from '../../core/types/userTypes';
import { TasksState } from '../../core/types/taskTypes';

interface StyledUserProps {
    isActive: boolean
}

const StyledUser = styled.li`
    font-weight: ${(props: StyledUserProps) => props.isActive ? 'bold' : 'regular'};
    cursor: pointer;
`

interface Props {
    users: Users,
    tasks: TasksState,
    selectedUser: string,
    onSelectUser(userName: string) : void,
    onAddUser(userName: string) : void,
    onLoadUsers() : void
}

const UsersListComponent: FunctionComponent<Props> = (props) => {
    const { users, selectedUser, onSelectUser, onAddUser, tasks, onLoadUsers } = props;
    const [ hoveredUser, setHoveredUser ] = useState('');
    const [ newUser, setNewUser ] = useState('');

    useEffect(() => {
        onLoadUsers()
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <input value={newUser} onChange={e => setNewUser(e.target.value)} />
            <Button onClick={() => {
                onAddUser(newUser);
                onSelectUser(newUser);
            }}>add</Button>
            <ul>
                {
                    Object.values(users).map(user => 
                        <StyledUser
                            key={user.id} 
                            isActive={user.id === selectedUser}
                            onClick={() => onSelectUser(user.id)}
                            onMouseEnter={() => setHoveredUser(user.id)}
                            onMouseLeave={() => setHoveredUser('')}
                        >
                            {user.name}
                            {(hoveredUser === user.id || selectedUser === user.id) && 
                                <ul>
                                    {user.tasks.map((taskName: string) => tasks[taskName] && 
                                        <TaskListItem key={taskName} task={tasks[taskName]} size={TaskSize.Small} />)
                                    }
                                </ul>
                            }
                        </StyledUser>)
                }
            </ul>
        </div>
    );
}

export default UsersListComponent;

