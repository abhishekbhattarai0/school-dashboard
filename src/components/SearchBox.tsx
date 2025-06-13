
import type React from 'react'
import { SearchIcon } from 'lucide-react'

function SearchBox({
  placeholder = 'search....',
  className = '',
  value,
  onChange,
}: {
  placeholder?: string
  className?: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className='relative flex items-center sm:w-full '>
      <input
        placeholder={placeholder}
        className={` px-2 py-1 rounded-xl border sm:w-full ${className}`}
        value={value}
        onChange={onChange}
      />
      <SearchIcon className='absolute right-4 text-gray-700 sm:flex hidden ' />
    </div>
  )
}

export default SearchBox