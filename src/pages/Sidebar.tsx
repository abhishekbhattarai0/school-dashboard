import IconButton from '@/components/IconButton'
import { BookA,  Home, PersonStanding, Presentation,  Text } from 'lucide-react'
import React from 'react'
import {  NavLink } from 'react-router-dom'

interface Item {
  title:string
  url: string,
  icon:   React.ComponentType<React.SVGProps<SVGSVGElement>>
}
const items:Item[] = [
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
    url: "/teachers",
    icon: Presentation,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: BookA,
  },
  {
    title: "Grades",
    url: "/grades",
    icon: Text,
  },
]



function Sidebar() {
  return (
    <div>
      {items.map((item:Item) => (
        <NavLink
          to={item.url}
          key={item.title}
          // className={({ isActive }) => ""} 
        >
          {({ isActive }) => (
            <IconButton
              title={item.title}
              icon={item.icon}
              className={isActive ? "bg-gray-200 px-4 rounded-sm w-full ": "bg-gray-400 px-4"}
              buttonStyle={isActive ? "font-semibold text-gray-600":"font-semibold text-black/80"}
            />
          )}
        </NavLink>
      ))}
    </div>
  );
}


export default Sidebar