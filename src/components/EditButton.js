import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import TaskContext from '../context/Context'
import EditTodo from './EditTodo'

const EditButton = ({ id }) => {
    const { todos, setTodos } = useContext(TaskContext)
    const [show, setShow] = useState(false)

    const filter = todos.filter(t => t.id === id)

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
    {filter.map((t) => {
      return <>
      {show ? 
        (<EditTodo todos={todos} setTodos={setTodos} id={id} show={show} setShow={setShow}/>)
        : 
        <Todo className={t.done === true ? 'done' : ''} onClick={() => editTodo(id)} >
          {show ? '' : t.title}
        </Todo>}
    </>
    })}

    </>

  )
}

const Todo = styled.button`
    border: none;
    background: transparent;
    text-transform: capitalize;
    font-size: 1.1rem;
    width: 70%;
    text-align: left;
    cursor: pointer;
    color: #fff;
    &.done {
      text-decoration: line-through;
    }
`;

export default EditButton