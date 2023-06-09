import React from 'react'


const Table = () => {
  const data=[
    {
   id:'$5869',
   customer:'Joseph',
   date:"6 Apr,2023",
   total:'$2,456',
   method:'cc',
   status:'Pending'
  }, {
    id:'$5869',
    customer:'Joseph',
    date:"6 Apr,2023",
    total:'$2,456',
    method:'cc',
    status:'Pending'
   }, {
    id:'$5869',
    customer:'Joseph',
    date:"6 Apr,2023",
    total:'$2,456',
    method:'cc',
    status:'Pending'
   },
   {
    id:'$5869',
    customer:'Joseph',
    date:"6 Apr,2023",
    total:'$2,456',
    method:'cc',
    status:'Pending'
   },
   {
    id:'$5869',
    customer:'Joseph',
    date:"6 Apr,2023",
    total:'$2,456',
    method:'cc',
    status:'Pending'
   },
   {
    id:'$5869',
    customer:'Joseph',
    date:"6 Apr,2023",
    total:'$2,456',
    method:'cc',
    status:'Pending'
   }
]
  return (
    <div>
      <div className='md:flex justify-between'>
        <div className='md:flex border-none gap-4 m-sm-4'>
           <h2 className='bg-white p-3 rounded-md mt-2'>Status: <span className='ml-1'><button>All <span>^</span></button></span></h2> 
           <div className='bg-white rounded-md mt-2'> <input type='search' placeholder='Search..' className='p-3'/></div>
         </div> 
         
         <div className='flex border-none bg-white p-3 rounded-md mt-2'>
           <h2>Filter By Date range: <span className='ml-1'><button>All <span>^</span></button></span></h2> 
         </div> 
         <div>
          
         </div>
         
      </div>
      <div className='mt-5 rounded-md shadow-md overflow-x-auto'>
      <table>
   <thead>
  <tr>
    <th>ID</th>
    <th>CUSTOMER</th>
    <th>DATE</th>
    <th>TOTAL</th>
    <th>METHOD</th>
    <th>STATUS</th>
    <th>ACTION</th>
  </tr>
  </thead>
  <tbody>
  {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.customer}</td>
                            <td>{val.date}</td>
                            <td>{val.total}</td>
                            <td>{val.method}</td>
                            <td className='text-yellow-400'>{val.status}</td>
                            <td className='text-blue-400'><button>View details</button></td>
                        </tr>
                    )
                })}
                </tbody>
  
</table>
      </div>
      <div className='md:flex justify-between mt-5 w-full'>
        <div className='flex border-none gap-4 w-full mt-2'>
           <h2 className='bg-white p-3 rounded-md h-12'>Showing: <span className='ml-1'><button>10 <span>^</span></button></span></h2> 
           <span className='mt-2'> of 50</span>
         </div> 
         
         <div className='flex border-none bg-white p-1 rounded-md mt-2'>
         <nav aria-label="Page navigation example">
  <ul className="inline-flex items-center -space-x-px">
    <li>
      <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-blue-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav>
         </div> 
         <div>
          
         </div>
         
      </div>
    </div>
  )
}

export default Table
