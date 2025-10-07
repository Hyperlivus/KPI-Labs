import { Image } from "./image";

export interface User {
    id: string;
    nickname: string;
    tag: string;
    email: string;
    password: string;
    avatar?: Image;
    bio?: string;
    birthdate?: Date;
}

