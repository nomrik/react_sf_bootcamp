export interface User {
    name: string,
    tasks: string[]
}

export interface Users {
    [key: string]: User
}

export interface UsersState {
    users: Users,
    selectedUser: string
}