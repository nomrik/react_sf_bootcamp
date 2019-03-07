import React, { FunctionComponent, useState } from 'react';

import { Users } from './types';
import Button from './Button';

interface Props {
    activeUser: string,
    users: Users,
    setUsers: Function
}

const TasksView: FunctionComponent<Props> = (props) => {
    const { activeUser, setUsers, users } = props;
    const [newTask, setNewTask] = useState('');

    const user = users[activeUser];

    if (!user) {
        return null;
    }


    return (
        <div>
            <h2>{user.name}'s Tasks</h2>
            <input value={newTask} onChange={e => setNewTask(e.target.value)}/>
                <Button onClick={() =>{
                    setUsers({
                        ...users,
                        [user.name]: {
                            ...user,
                            tasks: [
                                ...user.tasks,
                                newTask
                            ]
                        }
                    })
                    setNewTask('');
                }}>add</Button>
            <ul>
                {user.tasks.map(task => 
                    <li>
                        {task}
                        <button onClick={() => {
                            setUsers({
                                ...users,
                                [user.name]: {
                                    ...user,
                                    tasks: user.tasks.filter(existingTask => existingTask !== task)
                                }
                            })
                        }}>delete</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default TasksView;