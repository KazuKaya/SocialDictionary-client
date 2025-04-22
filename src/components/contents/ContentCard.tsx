import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function ContentCard() {

    const [content] = useState({
        title: "Bu bir içerik başlığıdır",
        description: "Bu içerikle ilgili açıklama metni buraya gelecek.",
        username: "kullaniciAdi",
        createdDate: new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });

    return (

        <div className='w-full h-auto p-4 border border-gray-200 rounded-md bg-white shadow-sm mb-4'> {/* Kartlar arasına boşluk için mb-4 */}
            <h2 className='text-xl font-bold mb-3 border-b pb-2 text-gray-800'>{content.title}</h2>
            <p className='mt-3 mb-5 text-gray-700 leading-relaxed'>{content.description}</p>
            <div className='flex flex-col mt-5 text-sm text-gray-600 border-t pt-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <button className='text-gray-500 hover:text-green-600 transition-colors'>
                            <FaChevronUp />
                        </button>
                        <button className='text-gray-500 hover:text-red-600 transition-colors'>
                            <FaChevronDown />
                        </button>
                    </div>
                    <p className='font-medium text-blue-600'>{content.username}</p>
                </div>
                <p className='flex mt-2 justify-end text-xs text-gray-400'>
                    {content.createdDate}
                </p>
            </div>
        </div>

    )
}