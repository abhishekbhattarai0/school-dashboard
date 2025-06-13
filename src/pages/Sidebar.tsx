import IconButton from '@/components/IconButton'
import { Calendar, Home, Inbox, PersonStanding, Search, Settings } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Students",
    url: "/students",
    icon: PersonStanding,
  },
  {
    title: "Teachers",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Courses",
    url: "#",
    icon: Search,
  },
  {
    title: "Grades",
    url: "#",
    icon: Settings,
  },
]

function Sidebar() {
  return (
    <div >
        {items.map( item => (
            <Link to={item.url} key={item.title} >
                <IconButton  title={item.title} icon={item.icon} className='data-[state=active]:bg-yellow-400'/>
            </Link>
        ) )}
       {/* <IconButton title='Setting' icon={Settings} url={''} /> */}
    </div>
  )
}

export default Sidebar