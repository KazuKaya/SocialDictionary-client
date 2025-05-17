export type Content = {
    id: string;
    description: string;
    titleId: string;
    userId: string;
    createdDate: string;
    updatedDate: string;
    voteCount: number;
};

export type Title = {
    id: string;
    name: string;
    entryCount: number;
};

export type User = {
    id: string;
    username: string;
};