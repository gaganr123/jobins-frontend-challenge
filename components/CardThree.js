import React from 'react'
import {  ChevronUpIcon ,ChevronDownIcon  } from "@heroicons/react/24/outline";
const CardThree = () => {
    const data=[
        {
            id:1,
        country:'USA',
        price:'35K',
        flag:'/usa.png',
        percent:'34'
        },
        {id:2,
            country:'Brazil',
            price:'25K',
            flag:'/brazil.jpg',
            percent:'14'
            },
            {id:3,
                country:'Australia',
                price:'15K',
                flag:'/australia.png',
                percent:'24'
                },
    ]
  return (
    <>
   {data.map((item)=>{
    return(
        <div className='flex flex-row item-baseline p-2 gap-2 mt-2' key={item.id}>
        
        <picture>
         <img src={item.flag}
                  className="w-16 md:mr-2 rounded-full  shadow-md"
                  alt="profile picture"
         />
         </picture>
              <div className='flex flex-col'>
              <h1 className='text-xl font-bold '>{item.price}</h1>
              <p>{item.country}</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-200 mt-3">
               <div className="bg-blue-600 h-2.5 rounded-full" style={{width: item.percent}}></div>
                 </div>
        <p className={`flex ml-2 ${item.percent >= 30 ? "text-lime-500":"text-red-500"}`}>{item.percent >= 30 ?<span><ChevronUpIcon  className='h-4 mt-1 '/></span>:<span><ChevronDownIcon  Icon  className='h-4 mt-1'/></span> }{item.percent}% </p>
       
     
    </div>
    )
   })}
   
    </>
  )
}

export default CardThree