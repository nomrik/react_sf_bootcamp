import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { UsersState } from './core/types/userTypes';

import UsersList from './web/usersList/UsersListContainer';
import TasksView from './web/tasksList/TasksViewContainer';

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
  return (
    <StyledApp>
        <AppHeader>
          <Panel>
            <UsersList />
          </Panel>
          <Panel>
            <TasksView />
          </Panel>
        </AppHeader>
      </StyledApp>
  )
}

export default App;
