import React, { useState } from 'react'
import DeleteButton from './DeleteButton'

const EditTodo = ({todos, setTodos, id, show, setShow}) => {
    const [todo, setTodo] = useState('')
    
    const editedTodo = {
        title: todo,
        id: id,
        done: false
    }

    const submitEdit = () => {
        todos = todos.map(t => t.id === id ? editedTodo : t)
        setTodos(todos)
        setShow(!show)
    }

    const findTodo = todos.filter((t) => t.id === id)

  return (
    <div>
        <article>
            {findTodo.map((t) => {
                return <div  key={t.id}>
                    <input type="text" defaultValue={t.title} onChange={(e) => setTodo(e.target.value)}/>
                    <button onClick={submitEdit} >save</button>
                    <button onClick={() => setShow(!show)} >go back</button>
                    <DeleteButton id={t.id}/>
                </div>
            })}
        </article>
    </div>
  )
}

export default EditTodo