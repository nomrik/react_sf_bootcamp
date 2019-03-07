export interface User {
    name: string,
    tasks: string[]
}

export interface Users {
    [key: string]: User
}