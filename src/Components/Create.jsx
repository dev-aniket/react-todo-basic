import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form';


const Create = (props) => {

    let todos = props.todos;
    let setTodos = props.setTodos;
    // const[title, setTitle] = useState("")

  //   const handleSubmit = (e) =>{
  //   e.preventDefault();

  //   const newTodo = {
  //     title: title,
  //     id: nanoid(),
  //     isComplete : false
  //   }

  //   setTodos([...todos, newTodo]);

  //   setTitle("")
  // }

  const{register, handleSubmit, reset, formState:{errors}} = useForm();

   const submitHandler = (data) => {
    data.id = nanoid();
    data.isComplete = false;
    let copyData = [...todos]
    copyData.push(data);

    setTodos(copyData);

    reset();
  }

  return (
    <div className='border w-[70%] p-10 flex flex-col text-center gap-4'>
        <h1 className='text-5xl font-thin' >Set <span className='text-red-400'> Remainder </span> for Task</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input {...register("title", {required:"Title cannot be empty"})} className='outline-0 p-2 border-b w-full text-2xl font-thin' type="text" placeholder='Enter Task'/>
          <br />
          <button className='px-10 py-2 border rounded text-xl mt-5'>Add Task</button>
          <small>{errors?.title?.message}</small>
        </form>
  
    </div>
  )
}

export default Create