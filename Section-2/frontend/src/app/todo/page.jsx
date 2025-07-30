'use client';
import { Icon123, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react'

const TodoList = () => {

  const [taskList, setTaskList] = useState([]);

  const addNewTask = (e) => {

    if(!e.target.value.trim()) return; 

    if(e.code === 'Enter'){
      console.log(e.target.value);

      const newTask = { text : e.target.value, complete : false };

      setTaskList([newTask, ...taskList])

      e.target.value = '';
      
    }
  }

const deleteTask = (index) => {
 console.log(index);

 const temp = taskList;
 temp.splice(index,1);
 setTaskList([...temp]);

}

  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='container mx-auto py-5'>
        <h1 className='text-center text-3xl font-bold'>Todo List</h1>
         
        <div className='shadow-md rounded-lg mt-5 bg-white'>
            <div className='p-5'>
                <input className='border p-2 rounded w-full' onKeyDown={addNewTask} />
            </div>
            <div className='p-5 border-t-1'>
           {
            taskList.map((task, index) => {
              return <div key={index} className='border mb-3 shadow p-3 rounded-md flex justify-between'>
                <p className='text-lg font-bold'>{task.text}</p>
                <button onClick={ () => {deleteTask(index)} } className='p-1 bg-blue-500 text-white rounded hover:scale-110 transition-all'>
                  <IconTrash/>
                </button>
              </div>
            })
           }
            </div>
        </div>
        </div>
    </div>
  )
}

export default TodoList;