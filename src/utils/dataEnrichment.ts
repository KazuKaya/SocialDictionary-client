import { Content, Title, User } from '../types';

type EnrichedContent = Content & { title: string; username: string };
type EnrichedRecent = { title: string; content: string; username: string };

export function enrichContents(contents: Content[], titles: Title[], users: User[]): EnrichedContent[] {
    if (!contents || !titles || !users) return [];
    return contents.map(content => {
        const titleObj = titles.find(t => t.id === content.titleId);
        const userObj = users.find(u => u.id === content.userId);
        return {
            ...content,
            title: titleObj?.name || "Başlık bulunamadı",
            username: userObj?.username || "Kullanıcı yok"
        };
    });
}

export function enrichRecents(recentContents: Content[], titles: Title[], users: User[]): EnrichedRecent[] {
    if (!recentContents || !titles || !users) return [];
    return recentContents.map(content => {
        const titleObj = titles.find(t => t.id === content.titleId);
        const userObj = users.find(u => u.id === content.userId);
        return {
            title: titleObj?.name || "Başlık bulunamadı",
            content: content.description,
            username: userObj?.username || "Kullanıcı yok"
        };
    });
}