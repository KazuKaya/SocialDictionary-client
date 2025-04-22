interface Props {
    titles: string[];
}
const Sidebar: React.FC<Props> = ({ titles }) => {

    return (
        <div className='max-laptop:hidden flex flex-col w-[300px] lg:w-[300px] h-full p-1 overflow-y-auto border-r border-gray-800 bg-white rounded-l-md'>
            <h3 className="text-lg font-semibold p-2 text-gray-700 border-b">Başlıklar</h3>
            {titles.map((title, index) => (
                <div
                    key={index}
                    className='border-b border-gray-100 my-0.5 h-9 px-3 flex items-center text-sm hover:bg-gray-100 cursor-pointer rounded text-gray-700 truncate'
                >
                    {title}
                </div>
            ))}
        </div>
    )
}

export default Sidebar;