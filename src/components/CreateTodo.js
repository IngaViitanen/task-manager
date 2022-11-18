import React, { useState } from 'react'

const CreateTodo = ({todos, setTodos}) => {
    const [todo, setTodo] = useState('')

    const newTodo = {
        title: todo,
        id: Math.random()
      }

    const addTodo = (newTodo) => {
        const newTodoArray = [...todos, newTodo]
        setTodos(newTodoArray)
    }

    const submitTodo = () => {
        addTodo(newTodo)
        setTodo('')
      }

  return (
    <>
        <button onClick={submitTodo}>new todo</button>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
    </>
  )
}

export default CreateTodo