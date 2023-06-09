import React from 'react'
import {  SearchIcon  } from "@heroicons/react/24/outline";
const Table = () => {
  return (
    <div className='w-full'>
      <div className='md:flex justify-between'>
        <div className='flex border-none gap-4'>
           <h2 className='bg-white p-3 rounded-md'>Status: <span className='ml-1'><button>All <span>^</span></button></span></h2> 
           <div className='bg-white rounded-md'> <input type='search' placeholder='Search..' className='p-3'/><SearchIcon/></div>
         </div> 
         
         <div className='flex border-none bg-white p-3 rounded-md'>
           <h2>Filter By Date range: <span className='ml-1'><button>All <span>^</span></button></span></h2> 
         </div> 
      </div>
    </div>
  )
}

export default Table
