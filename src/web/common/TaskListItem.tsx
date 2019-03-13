import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';

import { Task } from '../../core/types/taskTypes';

export enum TaskSize {
    Standard = "BIG",
    Small = "SMALL"
}

const taskSizeToFontSize = {
    [TaskSize.Standard]: 'inherit',
    [TaskSize.Small]: '10px'
}

interface Props {
    task: Task,
    size?: TaskSize,
    onClick?(e: MouseEvent): void,
}

const StyledTaskListItem = styled.li`
    font-size: ${ ({size = TaskSize.Standard}: Props) => taskSizeToFontSize[size]};
    text-decoration: ${ (props: Props) => props.task.isDone ? 'line-through' : 'auto' };
    cursor: ${ (props: Props) => props.onClick ? 'pointer' : 'auto' };
`

const TaskListItem: FunctionComponent<Props> = (props) => {
    const { task } = props;
    return (
        <StyledTaskListItem {...props}>
            {task.description}
        </StyledTaskListItem>
    )
}

export default TaskListItem;