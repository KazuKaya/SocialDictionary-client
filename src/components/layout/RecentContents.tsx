interface RecentContent {
    title: string;
    content: string;
    username: string;
}

interface Props {
    data: RecentContent[];
}

const RecentContents: React.FC<Props> = ({ data }) => {
    return (
        <div className='max-laptop:hidden flex flex-col w-[300px] h-full p-1 overflow-y-auto border-l border-gray-200 bg-white rounded-r-md' >
            <h3 className="text-lg font-semibold p-2 text-gray-700 border-b">Recent Contents</h3>
            {data.map((item, index) => (
                <div key={index} className='border-b border-gray-100 my-0.5 h-auto px-2 flex flex-col justify-between hover:bg-gray-100 cursor-pointer rounded text-gray-700'>
                    <div className="flex flex-col items-start pt-1">
                        <span className="font-semibold truncate-lines-1">{item.title}</span>
                        <span className='text-xs text-gray-400 truncate-lines-4'>{item.content}</span>
                    </div>
                    <span className="flex justify-end pb-1.5 font-bold text-xs text-blue-400">{item.username}</span>
                </div>
            ))}
        </div >
    )
}

export default RecentContents;