
import React from 'react'
import {  ArrowLongUpIcon } from "@heroicons/react/24/outline";
const CardOne = () => {
    
  return (
    <div className='flex flex-row p-5 justify-between divide-x'>
        <div className='flex justify-center'>
        <picture>
         <img src="/card1.png"
                  className="h-16 md:mr-2 border-2 border-white mt-5"
                  alt="profile picture"
                />
              </picture>
        </div>
        
        <div  className='p-1 '>
        <h2 className='text-2xl ml-2'>Total sales & cost</h2>
        <p className='ml-2'>Last 7 days</p>
        <h1 className='text-2xl mt-2 font-bold ml-2'>$350k</h1>
        <p className='flex mt-2 text-lime-500 ml-2'><ArrowLongUpIcon className='h-4 mt-1'/>8.56k <span className='ml-2 text-black'>vs last 7 days</span></p>
        </div>
     
    </div>
  )
}

export default CardOne
