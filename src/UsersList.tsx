import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Users } from './types';

interface StyledUserProps {
    isActive: boolean
}

const StyledUser = styled.li`
    cursor: pointer;
    font-weight: ${(props: StyledUserProps) => props.isActive ? 'bold' : 'regular'};
`

interface Props {
    users: Users,
    activeUser: string,
    addUser: Function,
    setActiveUser: Function
}

const UsersList: FunctionComponent<Props> = (props) => {
    const { users, activeUser, addUser, setActiveUser } = props;
    const [ newUser, setNewUser ] = useState('');

    return (
        <div>
            <h2>Users</h2>
            <input value={newUser} onChange={e => setNewUser(e.target.value)} />
            <button onClick={() => {
                addUser(newUser);
                setActiveUser(newUser);
                setNewUser('');
            }}>Add</button>
            <ul>
                {
                    Object.values(users).map(user => <StyledUser isActive={user.name === activeUser} onClick={() => setActiveUser(user.name)}>{user.name}</StyledUser>)
                }
            </ul>
        </div>
    )
}

export default UsersList;