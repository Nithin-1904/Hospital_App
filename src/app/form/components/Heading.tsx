import React from 'react'
import { HeadingProps } from './type'


const Heading = ({title}:HeadingProps) => {
  return (
    <div className='bg-gray-200 m-9 p-4 pl-2 rounded-md text-2xl items-center font-semibold'>
      <h1>{title}</h1>
    </div>
  )
}

export default Heading
