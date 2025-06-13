import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { UsersRound } from 'lucide-react'

interface ActivitiesProps {
    title: string,
    time: string,
    description: string
}
const recentActivitiesData: ActivitiesProps[] = [
    {
        title: "Staff Meeting",
        time: "09:45 AM",
        description: "Discussion about new curriculum implementation"
    },
    {
        title: "New Student Enrolled",
        time: "09:45 AM",
        description: "Emma Thompson joined Class 7B"
    },
    {
        title: "Fee Payment",
        time: "09:45 AM",
        description: "John Smith paid the quarterly fees"
    },
    {
        title: "Parent-Teacher Meeting",
        time: "09:45 AM",
        description: "Scheduled for Class 8 students"
    },
    {
        title: "Science Exhibition",
        time: "09:45 AM",
        description: "Preparations started for annual science fair"
    },
   
]

const RecentActivities = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest updates and activities</CardDescription>
                </CardHeader>
                <CardContent>
                    {recentActivitiesData.map(activity => (
                        <div key={activity.title} className='flex flex-col  items-around border rounded-2xl py-2 px-4 gap-4 mb-2' >

                       <div className='flex justify-between ml-4 w-full pr-2 '>
                        <div className='flex gap-4'>
                         < UsersRound className='' />
                        <h4 className='text-md font-semibold text-gray-700'>{activity.title}</h4>
                       </div>
                        <p className='text-md text-gray-700'>{activity.time}</p>
                       </div>
                       <div className='ml-4 text-gray-600'>{activity.description}</div>
                    </div>
                    ))}
                    
                </CardContent>
            </Card>
        </div>
    )
}

export default RecentActivities