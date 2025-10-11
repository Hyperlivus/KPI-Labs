export enum FileType {
    IMAGE = "image",
    VIDEO = "video",
    AUDIO = "audio",
    DOCUMENT = "document",
}

export interface File {
    id: number;
    url : string;
    type: FileType;
}