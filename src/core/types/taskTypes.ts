export interface Task {
    user: string,
    description: string,
    isDone: boolean
}

export interface TasksState {
    [key: string]: Task
}