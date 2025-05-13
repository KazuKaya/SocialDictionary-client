import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { getContents } from './api/contents/contentsApi';
import { getTitles, getTrendingTitles } from './api/titles/titlesApi';
import { getUsers } from './api/users/usersApi';
import ContentList from './components/contents/ContentList';

type Content = {
  id: string;
  description: string;
  titleId: string;
  userId: string;
  createdDate: string;
  updatedDate: string;
  voteCount: number;
};

type Title = {
  id: string;
  name: string;
  entryCount: number
};

type User = {
  id: string;
  username: string;
};
function App() {
  const [contents, setContents] = useState<(Content & { title: string; username: string })[]>([]);
  const [trendingTitles, setTrendingTitles] = useState([]);
  const [titles, setTitles] = useState<Title[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentData, titleData, userData, trendingData] = await Promise.all([
          getContents(),
          getTitles(),
          getUsers(),
          getTrendingTitles()
        ]);

        const enrichedContents = contentData.map((content: Content) => {
          const titleObj = titleData.find((t: Title) => t.id === content.titleId);
          const userObj = userData.find((u: User) => u.id === content.userId);
          return {
            ...content,
            title: titleObj?.name || "Başlık bulunamadı",
            username: userObj?.username || "Kullanıcı yok"
          };
        });

        setContents(enrichedContents);
        setTitles(titleData);
        setUsers(userData);
        setTrendingTitles(trendingData);
      } catch (error) {
        console.error("Veriler alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className='flex flex-col w-screen h-screen bg-gray-50'>
      <Header />
      {/* Main Content Area */}
      <div className='flex justify-between items-start w-screen flex-1 py-4 px-2 md:px-4 overflow-y-auto'> {/* scroll ekledik */}

        {/* Popular Titles */}
        <Sidebar titles={trendingTitles} />

        {/* Popular Contents */}
        <div className='flex flex-col max-md:w-full  md:w-[550px] lg:w-[600px] h-auto p-2 md:p-4 overflow-y-auto'>
          <ContentList contents={contents} />
        </div>

        {/* Latest Contents */}
        <div className='max-laptop:hidden flex flex-col w-[300px] h-full p-1 overflow-y-auto border-l border-gray-200 bg-white rounded-r-md'>
          <h3 className="text-lg font-semibold p-2 text-gray-700 border-b">Diğer</h3>
          <div
            className='border-b border-gray-100 my-0.5 h-9 px-3 flex items-center justify-between text-sm hover:bg-gray-100 cursor-pointer rounded text-gray-700'
          >
            <span>Başlık </span>
            <span className='text-xs text-gray-400'>Uzunluk:</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;