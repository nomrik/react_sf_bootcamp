import React, { FunctionComponent, useState } from 'react';

import { Users } from '../../core/types/userTypes';
import Button from '../common/Button';
import { Task } from '../../core/types/taskTypes';

interface Props {
    selectedUser: string,
    users: Users,
    tasks: Task[],
    onAddTask: Function,
    onDeleteTask: Function
}

const TasksViewComponent: FunctionComponent<Props> = (props) => {
    const { tasks, selectedUser, users, onAddTask, onDeleteTask } = props;
    const [newTask, setNewTask] = useState('');

    const user = users[selectedUser];

    if (!user) {
        return null;
    }


    return (
        <div>
            <h2>{user.name}'s Tasks</h2>
            <input value={newTask} onChange={e => setNewTask(e.target.value)}/>
                <Button onClick={() => {
                    onAddTask(newTask, selectedUser);
                    setNewTask('');
                }}>add</Button>
            <ul>
                {tasks.map(task => 
                    <li key={task.description}> 
                        {task.description}
                        <button onClick={() => {
                            onDeleteTask(task.description, selectedUser);
                        }}>delete</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default TasksViewComponent;