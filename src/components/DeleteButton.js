import React from 'react'

const DeleteButton = ({id, todos, setTodos}) => {

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