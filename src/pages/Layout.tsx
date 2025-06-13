import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { MenuIcon } from 'lucide-react'

export default function Layout() {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            {/* Top Nav */}
            <div className='flex justify-between h-16 px-2 items-center bg-gray-400 shrink-0'>
                <div className='flex flex-row gap-4 ml-2'>
                    <MenuIcon className='sm:hidden' onClick={() => setShowSidebar(prev => !prev)} />
                    <p className='md:text-2xl font-bold'>School</p>
                </div>
                <div className=''>
                    <input
                        placeholder='search'
                        className='bg-white px-2 py-1.5 rounded-full sm:w-full w-[200px] '
                    />

                </div>
            </div>

            {/* Sidebar + Main */}
            <div className='flex flex-row flex-1 overflow-hidden'>
                <div id="sidebar" className={`bg-gray-400 border rounded-sm pr-8 pt-4  h-full overflow-y-auto sm:flex  ${showSidebar ? "flex" : "hidden"}`}>
                    <Sidebar />
                </div>
                <div id="main-container" className='flex-1 overflow-auto p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
