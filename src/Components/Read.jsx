import React from 'react'

const Read = (props) => {
    let todos = props.todos;
    let setTodos = props.setTodos;

    const handleDelete = (id) =>{
      let filterTodo = todos.filter((todo) => todo.id != id);

      setTodos(filterTodo);
    }

    const renderTodo = todos.map((todo)=>{
      return <li className='mb-3 flex justify-between items-center p-3 bg-gray-900' key={todo.id}><span className='font-thin'>{todo.title}</span>
       <button className='px-2 py-1 border rounded ml-2' onClick={()=>handleDelete(todo.id)}>Delete</button>    
      </li>
  })
  return (
    <div className='w-[30%] flex flex-col p-10'>
        <h1 className = 'text-4xl font-thin'>Pending Task</h1>
        <ol className='p-2'>{renderTodo}</ol>
    </div>
  )
}

export default Read