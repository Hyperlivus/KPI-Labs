import { Image } from "./image";
import { Member } from "./chat";

export interface User {
    id: number;
    nickname: string;
    tag: string;
    email: string;
    password: string;
    avatar?: Image;
    bio?: string;
    birthdate?: Date;
    members: Member[];
}

