import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import { Users } from './types';


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
    activeUser: string,
    setUsers: Function,
    setActiveUser: Function
}

const UsersList: FunctionComponent<Props> = (props) => {
    const { users, activeUser, setUsers, setActiveUser } = props;
    const [newUser, setNewUser] = useState('');
    const [hoveredUser, setHoveredUser] = useState('');

    return (
        <div>
            <h2>Users</h2>
            <input value={newUser} onChange={e => setNewUser(e.target.value)} />
            <Button onClick={() => {
                setUsers({
                    ...users,
                    [newUser]: {
                        name: newUser,
                        tasks: []
                    }
                });
                setActiveUser(newUser);
            }}>add</Button>
            <ul>
                {
                    Object.values(users).map(user => 
                        <StyledUser 
                            isActive={user.name === activeUser}
                            onClick={() => setActiveUser(user.name)}
                            onMouseEnter={() => setHoveredUser(user.name)}
                            onMouseLeave={() => setHoveredUser('')}
                        >
                            {user.name}
                            {(hoveredUser === user.name || activeUser === user.name) && 
                                <StyledMiniTaskList>
                                    {user.tasks.map(task => <li>{task}</li>)}
                                </StyledMiniTaskList>
                            }
                        </StyledUser>)
                }
            </ul>
        </div>
    );
}

export default UsersList;

