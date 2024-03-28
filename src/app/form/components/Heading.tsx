import React from 'react'

interface HeadingProps{
    title:string
}

const Heading = ({title}:HeadingProps) => {
  return (
    <div className="my-6 text-lg font-medium bg-gray-300 p-4 rounded-lg dark:bg-green-500">
        <h1>{title}</h1>
    </div>
  )
}

export default Heading