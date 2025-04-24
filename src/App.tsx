// Hamburger ve Kapatma ikonları
import './App.css';
import ContentCard from './components/contents/ContentCard';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
  // Mobil menünün açık/kapalı durumunu tutacak state

  // Menüyü açıp kapatacak fonksiyon

  //15 title
  const titles = [
    "İlk başlık burada",
    "İkinci başlık örneği",
    "Başka bir başlık",
    "Tailwind ile stil",
    "React bileşeni",
    "Liste öğesi",
    "İlk başlık burada",
    "İkinci başlık örneği",
    "Başka bir başlık",
    "Tailwind ile stil",
    "İlk başlık burada",
    "İkinci başlık örneği",
    "Başka bir başlık",
    "Tailwind ile stil",
    "React bileşeni"
  ];



  return (
    <div className='flex flex-col w-screen h-screen bg-gray-50'>
      <Header />
      {/* Ana İçerik Alanı (Değişiklik yok) */}
      <div className='flex justify-between items-start w-screen flex-1 py-4 px-2 md:px-4 overflow-y-auto'> {/* scroll ekledik */}

        {/* Sol Sütun (Başlıklar) Sidebar */}
        <Sidebar titles={titles} />

        {/* Orta Sütun (Ana İçerik) w-full*/}
        <div className='flex flex-col max-md:w-full bg-amber-800 md:w-[550px] lg:w-[600px] h-auto p-2 md:p-4 overflow-y-auto'>
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>

        <div className='max-laptop:hidden flex flex-col w-[250px] h-full p-1 overflow-y-auto border-l border-gray-200 bg-white rounded-r-md'>
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
      </div>
    </div>
  );
}

export default App;