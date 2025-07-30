import React from 'react'

const Mybutton = ({children}) => {
  return (
    <button className='bg-blue-500 text-white p-3 rounded'>{children}</button>
  )
}

export default Mybutton;