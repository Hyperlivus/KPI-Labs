import { Member } from "./chat";

export interface User {
    id: number;
    nickname: string;
    tag: string;
    email: string;
    password: string;
    avatarUrl?: string;
    bio?: string;
    birthdate?: Date;
    members: Member[];
}

