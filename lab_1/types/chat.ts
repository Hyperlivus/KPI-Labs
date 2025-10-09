import {User} from "./user";

export enum Role {
    Admin = 'admin',
    Member = 'member',
    SuperAdmin = 'superadmin',
}

export interface Chat {
    id: number;
    name: string;
    tag: string;
    avatarUrl: string;
    description: string;
}

export interface Member {
    id: number;
    role: Role;
    user: User;
}