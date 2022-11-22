import React, { useState, useContext } from 'react'
import TaskContext from '../context/Context'

const CreateTodo = () => {
    const { todos, setTodos } = useContext(TaskContext)
    const [todo, setTodo] = useState('')

    const newTodo = {
        title: todo,
        id: Math.random(),
        done: false
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