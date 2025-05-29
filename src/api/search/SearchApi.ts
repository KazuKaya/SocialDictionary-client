import { getTitles } from "../titles/titlesApi";
import { getUsers } from "../users/usersApi";

export type SearchResult = {
    id: number;
    name: string;
    type: "title" | "user";
};

export const SearchApi = async (query: string): Promise<SearchResult[]> => {
    const [titles, users] = await Promise.all([getTitles(), getUsers()]);

    const lowerQuery = query.toLowerCase();

    const filteredTitles = titles
        .filter((title: any) => title.name.toLowerCase().includes(lowerQuery))
        .map((title: any) => ({
            id: title.id,
            name: title.name,
            type: "title" as const,
        }));

    const filteredUsers = users
        .filter((user: any) => user.username.toLowerCase().includes(lowerQuery))
        .map((user: any) => ({
            id: user.id,
            name: user.username,
            type: "user" as const,
        }));

    return [...filteredTitles, ...filteredUsers];
};