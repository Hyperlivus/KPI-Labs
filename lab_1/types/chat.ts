import { User } from "./user";
import { Message } from "./message";

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
    members: Member[];
    messages: Message[];
}

export interface Member {
    id: number;
    role: Role;
    user: User;
}