import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { getContents, getRecentContents } from './api/contents/contentsApi';
import { getTitles, getTrendingTitles } from './api/titles/titlesApi';
import { getUsers } from './api/users/usersApi';
import ContentList from './components/contents/ContentList';
import RecentContents from './components/layout/RecentContents';

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
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentData, titleData, userData, trendingData, recentContentData] = await Promise.all([
          getContents(),
          getTitles(),
          getUsers(),
          getTrendingTitles(),
          getRecentContents()
        ]);
        console.log("Recent contents:", recentContentData);

        const enrichedContents = contentData.map((content: Content) => {
          const titleObj = titleData.find((t: Title) => t.id === content.titleId);
          const userObj = userData.find((u: User) => u.id === content.userId);
          return {
            ...content,
            title: titleObj?.name || "Başlık bulunamadı",
            username: userObj?.username || "Kullanıcı yok"
          };
        });

        const enrichedRecents = recentContentData.map((content: Content) => {
          const titleObj = titleData.find((t: Title) => t.id === content.titleId);
          const userObj = userData.find((u: User) => u.id === content.userId);
          return {
            title: titleObj?.name || "Başlık bulunamadı",
            content: content.description,
            username: userObj?.username || "Kullanıcı yok"
          };
        });


        setContents(enrichedContents);
        setTitles(titleData);
        setUsers(userData);
        setTrendingTitles(trendingData);
        setRecents(enrichedRecents);
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
        <RecentContents data={recents} />
      </div>
    </div>
  );
}

export default App;