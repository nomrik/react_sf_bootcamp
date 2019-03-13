import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Users } from '../../core/types/userTypes';
import Button from '../common/Button';
import TaskListItem from '../common/TaskListItem';
import { Task } from '../../core/types/taskTypes';

const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    selectedUser: string,
    users: Users,
    tasks: Task[],
    onAddTask(taskName: string, userName: string) : void,
    onDeleteTask(taskName: string, userName: string) : void,
    onSetTaskIsDone(taskName: string) : void
}

const TasksViewComponent: FunctionComponent<Props> = (props) => {
    const { tasks, selectedUser, users, onAddTask, onDeleteTask, onSetTaskIsDone } = props;
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
                    <TaskContainer>
                        <TaskListItem 
                            key={task.description}
                            task={task}
                            onClick={() => onSetTaskIsDone(task.description)}
                        /> 
                        <Button onClick={() => {
                                onDeleteTask(task.description, selectedUser);
                            }}>delete</Button>
                    </TaskContainer>)
                }
            </ul>
        </div>
    )
}

export default TasksViewComponent;