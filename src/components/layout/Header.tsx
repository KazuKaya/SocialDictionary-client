import { useState } from 'react';
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoAdd } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <div className='relative flex justify-between items-center px-4 md:px-10 h-16 border-b border-gray-200 bg-white shadow-sm'>
                {/* --- Menu Button for Mobile Devices --- */}
                <button
                    onClick={toggleMobileMenu}
                    className="sm:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-label="Ana menüyü aç"
                >
                    {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                </button>

                {/* --- Logo & Brand --- */}
                <div className='max-tablet:hidden flex gap-3 items-center'>
                    <img src="/logo.png" alt="SocialDictionary Logo" className="h-8 w-auto" />
                    <h2 className='text-xl font-bold text-gray-800'>SocialDictionary</h2>
                </div>

                {/* --- Search Bar --- */}
                <div className='grow mx-2 lg:max-w-lg'>
                    <input
                        className='w-full h-9 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                        type="text"
                        placeholder="Ara..."
                    />
                </div>

                {/* --- Header Icons --- */}
                <div className='max-tablet:hidden flex w-auto justify-between items-center text-2xl space-x-4'>
                    <a href="#" className='text-gray-600 hover:text-blue-600'>
                        <LuMessageCircleMore />
                    </a>
                    <button className='text-gray-600 hover:text-blue-600'>
                        <IoAdd />
                    </button>
                    <button className='text-gray-600 hover:text-blue-600'>
                        <IoMdNotificationsOutline />
                    </button>
                    <a href="#" className='text-gray-600 hover:text-blue-600'>
                        <CgProfile />
                    </a>
                </div>

                {/* --- Mobile Drop Down Menu --- */}
                <div
                    className={`
                      md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}
                      absolute top-16 left-0 w-full bg-white shadow-lg z-20 border-t border-gray-200
                  `}
                >
                    <div className="flex flex-col p-4 space-y-4">
                        {/* --- Logo & Brand --- */}
                        <div className='flex gap-3 items-center border-b pb-3'>
                            <img src="/logo.png" alt="SocialDictionary Logo" className="h-7 w-auto" />
                            <h2 className='text-lg font-bold text-gray-800'>SocialDictionary</h2>
                        </div>

                        {/* --- Menu Icons --- */}
                        <div className='flex flex-col space-y-3 text-lg'>
                            <a href="#" className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700'>
                                <LuMessageCircleMore /> Messages
                            </a>
                            <button className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700 text-left'>
                                <IoAdd /> Add New Content
                            </button>
                            <button className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700 text-left'>
                                <IoMdNotificationsOutline /> Notifications
                            </button>
                            <a href="#" className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700'>
                                <CgProfile /> Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}