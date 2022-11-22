import React, { useState, useContext } from 'react'
import TaskContext from '../context/Context'
import EditTodo from './EditTodo'

const EditButton = ({ id }) => {
    const { todos, setTodos } = useContext(TaskContext)
    const [show, setShow] = useState(false)

    const editTodo = (id) => {
        const allTodos = todos
        const filterTodos = allTodos.filter(t => t.id === id)
        if(todos.id === id){
            setShow(show)
        } else {
            setShow(!show)
        }
        console.log(filterTodos)
    }

  return (
    <>
    <button onClick={() => editTodo(id)}>{show ? 'go back' : 'edit'}</button>

    {show ? (
    <EditTodo todos={todos} setTodos={setTodos} id={id} show={show} setShow={setShow}/>
    ) : null}
    </>

  )
}

export default EditButton