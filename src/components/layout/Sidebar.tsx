interface TrendingTitle {
    id: string;
    name: string;
    entryCount: number;
}

interface Props {
    titles: TrendingTitle[];
}

const Sidebar: React.FC<Props> = ({ titles }) => {

    return (
        <div className='max-laptop:hidden flex flex-col w-[300px] lg:w-[300px] h-full p-1 overflow-y-auto border-r border-gray-800 bg-white rounded-l-md'>
            <h3 className="text-lg font-semibold p-2 text-gray-700 border-b">Trends</h3>
            {titles.map((title, index) => (
                <div
                    key={index}
                    className='border-b border-gray-100 my-0.5 h-9 px-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer rounded text-gray-700 truncate'
                >
                    <span className="text-sm">{title.name}</span>
                    <span className="text-xs font-semibold text-gray-500">{title.entryCount}</span>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;