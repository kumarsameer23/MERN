'use client';
import React from 'react'

const EventHandling = () => {

const previewImage = (e) => {
const file = e.target.files[0];

const reader = new FileReader();
reader.onload = (event) => {
  const img = document.createElement('img');
  img.src = event.target.result;
  document.body.appendChild(img);
};
reader.readAsDataURL(file);
}

  return (
    <div className='container mx-auto py-5'>
        <h1 className='text-3xl font-bold text-center'>EventHandling
        </h1>
       <hr className='my-10' />
       <button onClick={() => {alert('Button was clicked');}} className='p-3 rounded-md bg-black text-white hover:bg-gray-800'>
        Click Me
        </button>

        <input type="text" onChange={ () => {console.log(e.target.value);}} />
        <input className='border p-2 rounded block'
        placeholder='Key Down Event'
        type="text"
        onKeyDown={(e) => {
          console.log(e.code);
        }} />
       <label className='p-4 rounded-xl bg-blue-200 text-blue-500 block mt-5 text-center font-bold' htmlFor="upload">Upload Image</label>
        <input className='hidden' id='upload' type="file" accept='image/*' onChange={previewImage} />
    </div>
  )
}

export default EventHandling;