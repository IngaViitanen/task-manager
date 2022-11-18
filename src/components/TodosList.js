import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
// import DoneButton from './DoneButton'

const TodosList = () => {
  const [todos, setTodos] = useState([ {title: 'walk the cat', id: 1, done: false}, {title: 'clean', id: 2,  done: false}, {title: 'go outside', id: 3,  done: false}])


  return (
    <section>
        {todos.map((todo) => {
            return <div key={todo.id}>
                    <li>{todo.title}</li>
                    <DeleteButton id={todo.id} todos={todos} setTodos={setTodos}/> 
                    <EditButton  todos={todos} setTodos={setTodos} id={todo.id}/>
                    {/* <DoneButton todos={todos} setTodos={setTodos}/> */}
                    <button >Done</button>
                  </div>
        })}
        <CreateTodo todos={todos} setTodos={setTodos}/> 
    </section>
  )
}

export default TodosList