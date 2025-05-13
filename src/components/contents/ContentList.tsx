import ContentCard from './ContentCard';

type ContentListProps = {
    contents: {
        id: string;
        description: string;
        title: string;
        voteCount: number;
        username: string;
        createdDate: string;
    }[];
};

const ContentList = ({ contents }: ContentListProps) => {
    return (
        <>
            {contents.map((item, index) => (
                <ContentCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    username={item.username}
                    createdDate={new Date(item.createdDate).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })} vote={item.voteCount} />
            ))}
        </>
    );
};

export default ContentList;
