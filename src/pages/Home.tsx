import EventCard from '@/components/EventCard';
import { InfoCard } from '@/components/InfoCard'
import RecentActivities from '@/components/RecentActivities';
import TopAchievers from '@/components/TopAchievers';

type CardContent = {
  title: string,
  value: number | string
}

const cardData: CardContent[] = [
  { title: "Total Students", value: 1240 },
  { title: "Teachers", value: 78 },
  { title: "Classes", value: 32 },
  { title: "Subjects", value: 18 },
  { title: "Exams Scheduled", value: 5 },
  { title: "Pending Fees", value: "$12,450" },
];

const Home = () => {
  return (
    <div className='flex ml-2 flex-col '>
      <h1 className='font-semibold text-2xl text-gray-950'>Welcome</h1>
      <div className=' grid sm:grid-cols-3  md:grid-cols-4 gap-4'>
        {cardData.map((data) => <InfoCard title={data.title} value={data.value} key={data.title} />)}
      </div>
      {/* Events card */}
      <div className='my-4'>
        <EventCard />
      </div>
      <div>
        <h1 className='text-2xl font-semibold mt-4 text-gray-700 mb-4'>Top 5 Achievers</h1>
        <TopAchievers />
      </div>
      <RecentActivities />


    </div>
  )
}

export default Home