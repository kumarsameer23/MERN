'use client';
import React, { useState } from 'react'

const StateManagement = () => {


// let count = 0;
 const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto py-5'>
     <h1 className='mb-10 text-center font-bold text-3xl'>State Management</h1>
     <h1 className='mt-5 font-bold text-4xl'>{count}</h1>
     <button onClick={() => {
        setCount(count+1);
        console.log(count);
        
     }} className='block mt-5 rounded-lg bg-blue-500 text-white p-4'>Add Count</button>
    </div>
  )
}

export default StateManagement;