import React, { Component } from 'react';

import './App.css';
import UsersList from './UsersList';
import { Users } from './types';

interface State {
  users: Users,
  activeUser: string
}

class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    
    this.state = {
      users: {},
      activeUser: ''
    }

    this.addUser = this.addUser.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
  }

  addUser(userName: string) {
    const { users } = this.state;

    const newUsers = {
      ...users,
      [userName]: {
        name: userName,
        tasks: []
      }
    }

    this.setState({
      users: newUsers
    });
  }

  setActiveUser(userName: string) {
    this.setState({
      activeUser: userName
    });
  }

  render() {
    const { users, activeUser } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <UsersList users={users} activeUser={activeUser} addUser={this.addUser} setActiveUser={this.setActiveUser} />
        </header>
      </div>
    );
  }
}

export default App;
