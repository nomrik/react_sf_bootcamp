import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Users } from './types';

import UsersList from './UsersList';
import TasksView from './TasksView';

const StyledApp = styled.div`
  color: white;
`

const Panel = styled.div`
  margin-right: 20px;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  padding: 20px;
`

const App: FunctionComponent = () => {
  const [users, setUsers] = useState<Users>({});
  const [activeUser, setActiveUser] = useState('');

  return (
    <StyledApp>
        <AppHeader>
          <Panel>
            <UsersList 
              users={users} 
              activeUser={activeUser} 
              setUsers={setUsers} 
              setActiveUser={setActiveUser}
            />
          </Panel>
          <Panel>
            <TasksView 
              users={users}
              activeUser={activeUser}
              setUsers={setUsers}
            />
          </Panel>
        </AppHeader>
      </StyledApp>
  )
}

export default App;
