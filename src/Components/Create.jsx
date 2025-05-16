import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const Create = (props) => {

    let todos = props.todos;
    let setTodos = props.setTodos;
    const[title, setTitle] = useState("")

    const handleSubmit = (e) =>{
    e.preventDefault();

    const newTodo = {
      title: title,
      id: nanoid(),
      isComplete : false
    }

    setTodos([...todos, newTodo]);

    setTitle("")
  }

  return (
    <div className='border w-[70%] p-10 flex flex-col text-center gap-4'>
        <h1 className='text-5xl font-thin' >Set <span className='text-red-400'> Remainder </span> for Task</h1>
        <form onSubmit={handleSubmit}>
          <input className='outline-0 p-2 border-b w-full text-2xl font-thin' type="text" placeholder='Enter Task' onChange={(e) => setTitle(e.target.value)} value={title}/>
          <br />
          <button className='px-10 py-2 border rounded text-xl mt-5'>Add Task</button>
        </form>
  
    </div>
  )
}

export default Create