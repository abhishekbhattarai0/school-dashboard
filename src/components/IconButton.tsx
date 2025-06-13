import React, { type SVGProps } from 'react'
import { Button } from './ui/button'

interface Props {
    title: string;
    className?: string;
    icon:  React.ComponentType<React.SVGProps<SVGSVGElement>>
}
function IconButton({title, className, icon: Icon}:Props) {
  return (
    <div className='flex ml-4 items-center '>
        < Icon className='h-5 w-5' />
        <Button variant="link" className={` ${className}`}>{title}</Button>
    </div>
  )
}

export default IconButton