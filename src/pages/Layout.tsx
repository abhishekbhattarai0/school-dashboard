import SearchBox from '@/components/SearchBox'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

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

export default function Layout () {
    return(
        <div>
            <div className='flex justify-between px-4 py-2'>
                <p className='text-2xl font-bold'>School Name</p>
                <div>
                    <SearchBox />
                </div>
            </div>
            
        </div>
    )
}
