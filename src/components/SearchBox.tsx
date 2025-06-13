import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'

function SearchBox({placeholder="search....",className=""}:{
    placeholder?:string,
    className?:string
}) {
  return (
   <div className='relative flex items-center w-full'>
     <SearchIcon className='absolute right-4 text-gray-700'/>
   <Input placeholder={placeholder} className={` ${className}`} />
   </div>
  )
}

export default SearchBox