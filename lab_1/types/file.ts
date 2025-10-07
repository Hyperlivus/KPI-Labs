export interface File {
    id: number;
    url : string;
    type: 'image' | 'video' | 'audio' | 'document';
}