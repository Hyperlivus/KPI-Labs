export interface Reaction {
    id: number;
    userId: number;
    reactionType: ReactionType;
}

export interface ReactionType {
    id: number;
    icon: string;
    label: string;
    tag: string;
}