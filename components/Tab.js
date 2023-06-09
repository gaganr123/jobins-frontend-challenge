import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    AllOrders: [
      {
        id: 1,
        name: 'Robert Fox',
        email: 'robert@gmail.com',
        cobtactnumber: "98578669877",
        Date: "1 jan, 1998",
        member:"3 march,2023",
        address:"2517 Wc Gray se,united state-54637 ",
        allorder:'150',
        completed:'140',
        cancelled:'10',
      },
      
    ],
    Completed: [
        {
            id: 1,
            name: 'Robert Fox',
            email: 'robert@gmail.com',
            cobtactnumber: "98578669877",
            Date: "1 jan, 1998",
            member:"3 march,2023",
            address:"2517 Wc Gray se,united state-54637 ",
            allorder:'150',
            completed:'140',
            cancelled:'10',
          },
    ],
    Cancelled: [
        {
            id: 1,
            name: 'Robert Fox',
            email: 'robert@gmail.com',
            cobtactnumber: "98578669877",
            Date: "1 jan, 1998",
            member:"3 march,2023",
            address:"2517 Wc Gray se,united state-54637 ",
            allorder:'150',
            completed:'140',
            cancelled:'10',
          },
    ],
  })

  return (
    <div className="w-full px-2 py-5 sm:px-0">
      <Tab.Group>
       
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
              )}
            >
        
             
                {posts.map((post) => {
                    return(
                        <div className='md:flex flex-row justify-around  divide-x-2' key={post.id}>
                            <div className='flex gap-8 mt-5 py-10 '>
                                <p className='border-4 border-violet-500 rounded-full bg-violet-300 h-10 w-10'></p>
                               <div> <h2 className='font-bold'>{post.name}</h2>
                                <p>{post.email}</p></div>
                            </div>
                            <div className='flex flex-col gap-2 pl-10 py-10 '>
                                <p>PERSONAL INFORMATION</p>
                               <div className='flex flex-row justify-around gap-3 mt-1'>
                                 <p >Contact No:</p>
                                <p>{post.cobtactnumber}</p>
                                </div>
                                <div className='flex flex-row justify-around gap-3 mt-1'>
                                 <p >Date of birth:</p>
                                <p>{post.Date}</p>
                                </div>
                                <div className='flex flex-row justify-around gap-3 mt-1'>
                                 <p >Member Since:</p>
                                <p>{post.member}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 pl-10 py-10 '>
                                <p>SHIPING ADDRESS</p>
                                <p>{post.address}</p>
                                <div className='flex flex-row justify-around gap-3'>
                               <div className='flex flex-col gap-4 mt-2'> 
                                <h2 className=' text-xl font-bold'>{post.allorder}</h2>
                                <p>All order</p>
                               
                                </div>
                                <div className='flex flex-col gap-4 mt-2'> 
                                <h2 className=' text-xl font-bold'>{post.completed}</h2>
                                <p>Completed</p>
                               
                                </div>
                                <div className='flex flex-col gap-4 mt-2'> 
                                <h2 className=' text-xl font-bold'>{post.cancelled}</h2>
                                <p>Cancelled</p>
                               
                                </div>
                                </div>
                            </div>
                           
                      </div>
                    )
                }
                 
                  
                )}
             
             
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List className="flex space-x-5 rounded-xl p-1 ml-5 max-w-md">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700',
                  'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white border-b-4 border-y-blue-900'
                    : 'text-black-100 hover:bg-white/[0.12] hover:text-blue-500'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
