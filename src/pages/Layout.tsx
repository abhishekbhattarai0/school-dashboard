import SearchBox from '@/components/SearchBox'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { HamIcon, List, MenuIcon } from 'lucide-react'

// function Layout() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/signin">SignIn</Link>
//           </li>
         
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// }

// export default function Layout () {
//     return(
//         <div className='flex gap-1  flex-col '>
//             <div className='flex justify-between h-16 px-2 items-center bg-gray-400'>
//                 <p className='text-2xl font-bold'>School Name</p>
//                 <div>
//                     <SearchBox className='bg-white'/>
//                 </div>
//             </div>
//             <div className='flex flex-row'>
//                 <div id="sidebar" className='bg-gray-400 w-[14rem] min-h-screen'>
//                     <Sidebar/>
//                 </div>
//                 <div id="main-container" className=' '>
//                     <Outlet/>
//                 </div>
//             </div>
            
//         </div>
//     )
// }
export default function Layout () {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            {/* Top Nav */}
            <div className='flex justify-between h-16 px-2 items-center bg-gray-400 shrink-0'>
                {/** use appropriate icon */}
                <div className='flex flex-row gap-4 ml-2'>
                    <MenuIcon className='sm:hidden' onClick={()=> setShowSidebar(prev => !prev)}/>
                <p className='md:text-2xl font-bold'>School</p>
                </div>
                <div>
                    <SearchBox className='bg-white' />
                </div>
            </div>

            {/* Sidebar + Main */}
            <div className='flex flex-row flex-1 overflow-hidden'>
                <div id="sidebar" className={`bg-gray-400 w-[14rem] h-full overflow-y-auto sm:flex  ${showSidebar ? "flex": "hidden"}`}>
                    <Sidebar />
                </div>
                <div id="main-container" className='flex-1 overflow-auto p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
