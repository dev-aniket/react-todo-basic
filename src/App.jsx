import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {

  const[todos, setTodos] = useState([
    {title: "Abc", id: 1, isComplete: false}
  ]) 
 
  return (
      <div className='text-white flex w-screen h-screen bg-gray-800 p-10'>
       <Create todos = {todos} setTodos = {setTodos}/>
       <Read todos = {todos} setTodos = {setTodos}/>
      </div>
  )
}

export default App