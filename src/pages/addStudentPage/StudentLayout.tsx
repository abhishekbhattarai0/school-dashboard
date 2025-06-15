import { Outlet } from 'react-router-dom'

function StudentLayout() {
  return (
    <div className='w-full h-full'>
        <Outlet/>
    </div>
  )
}

export default StudentLayout