import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import { Users } from '../../core/types/userTypes';
import { TasksState } from '../../core/types/taskTypes';


interface StyledUserProps {
    isActive: boolean
}

const StyledUser = styled.li`
    font-weight: ${(props: StyledUserProps) => props.isActive ? 'bold' : 'regular'};
    cursor: pointer;
`

const StyledMiniTaskList = styled.ul`
    font-size: 10px;
`

interface Props {
    users: Users,
    tasks: TasksState,
    selectedUser: string,
    onSelectUser: Function,
    onAddUser: Function
}

const UsersListComponent: FunctionComponent<Props> = (props) => {
    const { users, selectedUser, onSelectUser, onAddUser, tasks } = props;
    const [ hoveredUser, setHoveredUser ] = useState('');
    const [ newUser, setNewUser ] = useState('');

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
                            key={user.name} 
                            isActive={user.name === selectedUser}
                            onClick={() => onSelectUser(user.name)}
                            onMouseEnter={() => setHoveredUser(user.name)}
                            onMouseLeave={() => setHoveredUser('')}
                        >
                            {user.name}
                            {(hoveredUser === user.name || selectedUser === user.name) && 
                                <StyledMiniTaskList>
                                    {user.tasks.map((task: string) => tasks[task] && <li key={task}>{tasks[task].description}</li>)}
                                </StyledMiniTaskList>
                            }
                        </StyledUser>)
                }
            </ul>
        </div>
    );
}

export default UsersListComponent;

