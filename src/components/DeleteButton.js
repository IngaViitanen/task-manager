import React, { useContext } from 'react'
import TaskContext from '../context/Context'

const DeleteButton = ({ id }) => {
  const { todos, setTodos } = useContext(TaskContext)

    const removeTodo = () => {
        const allTodos = todos
        const filterTodos = allTodos.filter((e) => {return e.id !== id})
        console.log(filterTodos, id)
        setTodos(filterTodos)
    }


  return (
    <button onClick={() => removeTodo(id)}>delete</button>
  )
}

export default DeleteButton