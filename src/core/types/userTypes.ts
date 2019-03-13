export interface User {
    id: string,
    name: string,
    description?: string,
    phone?: string,
    fax?: string,
    type?: string,
    tasks: string[]
}

export interface Users {
    [key: string]: User
}

export interface UsersState {
    users: Users,
    selectedUser: string
}