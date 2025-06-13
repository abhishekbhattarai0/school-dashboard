import SearchBox from '@/components/SearchBox'
import TeacherTable from '@/components/TeacherTable'
import { Button } from '@/components/ui/button'

function Teachers() {
  return (
    <div>
      <div className='flex justify-between gap-20 mb-8'>
        <Button variant={'outline'} >Add Student</Button>
      <SearchBox className='' placeholder='search teachers'/>
      </div>
      <TeacherTable/>
    </div>
  )
}

export default Teachers