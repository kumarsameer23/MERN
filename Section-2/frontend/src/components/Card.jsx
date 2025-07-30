import React from 'react'

const Card = ({ title, description, btnText }) => {
  return (
    <div className='rounded shadow-lg p-5 bg-white space-y-5 border-2'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className=''>{description}</p>
        <button className='bg-violet-500 text-white p-3 rounded-lg'>{btnText}</button>
        
    </div>
  )
}

export default Card;