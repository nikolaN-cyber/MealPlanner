export interface RegisterUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface LoginUser {
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dietGoal: string;
    createdAt: Date;
}