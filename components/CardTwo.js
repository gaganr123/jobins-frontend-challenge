
import React from 'react'
import {  ArrowLongUpIcon } from "@heroicons/react/24/outline";
const CardTwo = () => {
    
  return (
    <div className='flex flex-col p-5 justify-between'>
        <div className='flex justify-around'>
        <picture>
         <img src="/card2.png"
                  className="h-16 md:mr-2 border-2 border-white mt-1"
                  alt="profile picture"
                />
              </picture>
              <div>
              <h2 className='text-2xl'>Total Profit</h2>
             <p >Last 7 days</p>
              </div>
            
        </div>
        
        <div  className='p-1 mt-2'>
        
        <h1 className='text-2xl mt-2 font-bold ml-2'>$50k</h1>
        <p className='flex mt-2 text-lime-500 ml-2'><ArrowLongUpIcon className='h-4 mt-1'/>12% <span className='ml-2 text-black'>vs last 7 days</span></p>
        </div>
     
    </div>
  )
}

export default CardTwo
