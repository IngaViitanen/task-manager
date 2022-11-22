import React, {useState, useContext} from 'react'
import TaskContext from '../context/Context'

const EditTodo = ({todos, setTodos, id, show, setShow}) => {
    const [todo, setTodo] = useState('')
    // const { todos, setTodos } = useContext(TaskContext)
    
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
                </div>
            })}
        </article>
    </div>
  )
}

export default EditTodo