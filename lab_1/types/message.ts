import { File } from "./file";
import { Reaction } from "./reaction";

export interface Message {
    id: number;
    content: string;
    isEdited: boolean;
    files: File[];
    reactions: Reaction[];
}
