import SearchBox from '@/components/SearchBox'
import StudentTable from '@/components/StudentTable'
import { Button } from '@/components/ui/button'

function Students() {
  return (
    <div>
      <div className='flex justify-between gap-20 mb-8'>
        <Button variant={'outline'} >Add Student</Button>
      <SearchBox className='' placeholder='search students'/>
      </div>
      <StudentTable/>
    </div>
  )
}

export default Students