import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface Props {
    title: string;
    description: string,
    username: string,
    createdDate: string,
    vote: number
}

const ContentCard: React.FC<Props> = ({ title, description, username, createdDate, vote }) => {
    return (
        <div className='w-full h-auto p-4 border border-gray-200 rounded-md bg-white shadow-sm mb-4'>
            <h2 className='text-xl font-bold mb-3 border-b pb-2 text-gray-800'>{title}</h2>
            <p className='mt-3 mb-5 text-gray-700 leading-relaxed'>{description}</p>
            <div className='flex flex-col mt-5 text-sm text-gray-600 border-t pt-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 items-center'>
                        <button className='flex text-gray-500 hover:text-green-600 transition-colors items-center'>
                            <FaChevronUp className="mt-0.5 hover:mt-0" />
                            {vote > 0 && (
                                <span className="pl-1 font-bold">
                                    {vote}
                                </span>
                            )}
                        </button>
                        <button className='flex text-gray-500 hover:text-red-600 transition-colors items-center'>
                            <FaChevronDown className="mt-0.5 hover:mt-1" />
                            {vote < 0 && (
                                <span className="pl-1 font-bold">
                                    {vote}
                                </span>
                            )}
                        </button>
                    </div>
                    <p className='font-medium text-blue-600'>{username}</p>
                </div>
                <p className='flex mt-2 justify-end text-xs text-gray-400'>
                    {createdDate}
                </p>
            </div>
        </div>
    )
}

export default ContentCard;