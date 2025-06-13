import React from 'react'
import { Button } from '@/components/ui/button'

interface Props {
  title: string;
  className?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  buttonStyle?: string
}
function IconButton({ title, className, icon: Icon, buttonStyle }: Props) {
  return (
    <div className={`flex ml-4 items-center ${className} `}>
      < Icon className='h-5 w-5' />
      <Button variant="link" className={`${buttonStyle}`} >{title}</Button>
    </div>
  )
}

export default IconButton