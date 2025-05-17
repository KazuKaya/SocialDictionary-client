import './App.css';
import { useContents } from './hooks/useContents';
import { useUsers } from './hooks/useUsers';
import { useTitles, useTrendingTitles } from './hooks/useTitles';
import { useRecentContents } from './hooks/useRecentContents';
import { enrichContents, enrichRecents } from './utils/dataEnrichment';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ContentList from './components/contents/ContentList';
import RecentContents from './components/layout/RecentContents';

function App() {
  const { data: contentsData = [], isLoading: isContentsLoading } = useContents();
  const { data: usersData = [] } = useUsers();
  const { data: titlesData = [] } = useTitles();
  const { data: trendingTitles = [] } = useTrendingTitles();
  const { data: recentContentsData = [] } = useRecentContents();

  const enrichedContents = enrichContents(contentsData, titlesData, usersData);
  const enrichedRecents = enrichRecents(recentContentsData, titlesData, usersData);

  return (
    <div className='flex flex-col w-screen h-screen bg-gray-50'>
      <Header />
      <div className='flex justify-between items-start w-screen flex-1 py-4 px-2 md:px-4 overflow-y-auto'>
        <Sidebar titles={trendingTitles} />
        <div className='flex flex-col max-md:w-full md:w-[550px] lg:w-[600px] h-auto p-2 md:p-4 overflow-y-auto'>
          {isContentsLoading ? <p>Loading...</p> : <ContentList contents={enrichedContents} />}
        </div>
        <RecentContents data={enrichedRecents} />
      </div>
    </div>
  );
}

export default App;
