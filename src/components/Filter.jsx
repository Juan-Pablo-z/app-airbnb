import React from 'react'

export const Filter = ({ icon, title }) => {
  return (
    <button className='items-center gap-2 py-1 px-3 sm:px-4 rounded-full text-gray-500 hover:text-black duration-200 text-[14px] sm:text-[16px]'>
      <div className='flex items-center justify-center '>
        {icon}
      </div>
      <div>
        {title}
      </div>

    </button>
  )
}
