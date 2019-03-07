export interface Task {
    user: string,
    description: string,
}

export interface TasksState {
    [key: string]: Task
}