// Hamburger ve Kapatma ikonları
import './App.css';
import ContentCard from './components/contents/ContentCard';

function App() {
  // Mobil menünün açık/kapalı durumunu tutacak state

  // Menüyü açıp kapatacak fonksiyon


  const titles = [
    "İlk başlık burada",
    "İkinci başlık örneği",
    "Başka bir başlık",
    "Tailwind ile stil",
    "React bileşeni",
    "Liste öğesi",
  ];



  return (
    <div className='flex flex-col w-screen h-screen bg-gray-50'>




      {/* Ana İçerik Alanı (Değişiklik yok) */}
      <div className='flex justify-around items-start w-screen flex-1 py-4 px-2 md:px-4 overflow-y-auto'> {/* scroll ekledik */}

        {/* Sol Sütun (Başlıklar) Sidebar */}
        <div className='md:flex flex-col w-[300px] lg:w-[300px] h-full p-1 overflow-y-auto border-r border-gray-800 bg-white rounded-l-md'>
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

        {/* Orta Sütun (Ana İçerik) w-full*/}
        <div className='flex flex-col w-full bg-amber-800 md:w-[550px] lg:w-[600px] h-full p-2 md:p-4 overflow-y-auto'>
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>

        {/* Sağ Sütun (Diğer) */}
        <div className='hidden lg:flex flex-col w-[250px] h-full p-1 overflow-y-auto border-l border-gray-200 bg-white rounded-r-md'>
          <h3 className="text-lg font-semibold p-2 text-gray-700 border-b">Diğer</h3>
          {titles.map((t, index) => (
            <div
              key={index}
              className='border-b border-gray-100 my-0.5 h-9 px-3 flex items-center justify-between text-sm hover:bg-gray-100 cursor-pointer rounded text-gray-700'
            >
              <span>Başlık {index + 1}</span>
              <span className='text-xs text-gray-400'>Uzunluk: {t.length}</span>
            </div>
          ))}
        </div>
      </div> {/* Ana içerik sonu */}
    </div > // Ana konteyner sonu
  );
}

export default App;