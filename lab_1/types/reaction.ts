import { Image } from "./image";


export interface Reaction {
    id: number;
    userId: number;
    reactionType: ReactionType;
}

export interface ReactionType {
    id: number;
    icon: Image;
    label: string;
    tag: string;
}