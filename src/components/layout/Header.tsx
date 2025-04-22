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
            {/* Header (Üst Kısım) - Konumlandırma için relative eklendi */}
            <div className='relative flex justify-between items-center px-4 md:px-10 h-16 border-b border-gray-200 bg-white shadow-sm'>
                {/* --- Mobil için Hamburger Menü Butonu --- */}
                {/* md ve üzeri ekranlarda gizli (md:hidden) */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-label="Ana menüyü aç" // Erişilebilirlik için label
                >
                    {/* Menü açıkken X, kapalıyken hamburger ikonu göster */}
                    {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                </button>

                {/* --- Logo ve Site Adı (Sadece md ve üzeri ekranlarda direkt görünür) --- */}
                {/* Mobil ekranda gizli (hidden), md ve üzerinde görünür (md:flex) */}
                <div className='max-laptop:hidden flex gap-3 items-center'>
                    <img src="/logo.png" alt="SocialDictionary Logo" className="h-8 w-auto" />
                    <h2 className='text-xl font-bold text-gray-800'>SocialDictionary</h2>
                </div>

                {/* --- Arama Çubuğu --- */}
                {/* Mobil ekranda butondan sonra gelmesi ve esnemesi için order ve flex-grow */}
                <div className='flex-grow mx-2 md:mx-4 max-w-lg md:max-w-md'> {/* max-w ekleyerek genişliği sınırlayabiliriz */}
                    <input
                        className='w-full h-9 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                        type="text"
                        placeholder="Ara..."
                    />
                </div>

                {/* --- Header Right İkonları (Sadece md ve üzeri ekranlarda direkt görünür) --- */}
                {/* Mobil ekranda gizli (hidden), md ve üzerinde görünür (md:flex) */}
                <div className='max-laptop:hidden md:flex w-auto md:w-[150px] justify-end md:justify-between items-center text-2xl space-x-4'>
                    {/* Butonlar arasındaki boşluk için space-x-4 */}
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

                {/* --- Mobil Açılır Menü --- */}
                {/* Sadece mobil ekranlarda (md:hidden) ve isMobileMenuOpen true ise gösterilir */}
                <div
                    className={`
                      md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}
                      absolute top-16 left-0 w-full bg-white shadow-lg z-20 border-t border-gray-200
                  `}
                >
                    <div className="flex flex-col p-4 space-y-4"> {/* Menü içeriği dikey dizildi */}
                        {/* Logo ve Site Adı (Mobil Menü İçinde) */}
                        <div className='flex gap-3 items-center border-b pb-3'>
                            <img src="/logo.png" alt="SocialDictionary Logo" className="h-7 w-auto" />
                            <h2 className='text-lg font-bold text-gray-800'>SocialDictionary</h2>
                        </div>

                        {/* Sağ İkonlar (Mobil Menü İçinde) */}
                        <div className='flex flex-col space-y-3 text-lg'>
                            <a href="#" className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700'>
                                <LuMessageCircleMore /> Mesajlar
                            </a>
                            <button className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700 text-left'>
                                <IoAdd /> Yeni Ekle
                            </button>
                            <button className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700 text-left'>
                                <IoMdNotificationsOutline /> Bildirimler
                            </button>
                            <a href="#" className='flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700'>
                                <CgProfile /> Profil
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}