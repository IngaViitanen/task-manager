import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import CreateTodo from './CreateTodo'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
// import DoneButton from './DoneButton'

const TodosList = () => {
  const [todos, setTodos] = useState([ {title: 'walk the cat', id: 1, done: false}, {title: 'clean', id: 2,  done: false}, {title: 'go outside', id: 3,  done: false} ])
  
  const updateTask = (id) => {
    const findTask = todos.find(todo => todo.id === id)
    const todoCopy = {...findTask, done: todos.done = true}
    if(findTask.done === false){
      taskDone(todoCopy)
    }
  }

  const taskDone = (finished) => {
    const array = [...todos]
    let checkFinished = array.map((todo) => todo.id === finished.id ? finished : todo)
    if(checkFinished){
      setTodos(checkFinished)
      console.log(todos)
    }
  }

  console.log(todos)

  return (
    <section>
        {todos.map((todo) => {
            return <div key={todo.id}>
                    {todo.done === true ? 
                    (<Finished>{todo.title}</Finished>) 
                    : 
                    (<List>{todo.title}</List>)}
                    <DeleteButton id={todo.id} todos={todos} setTodos={setTodos}/> 
                    <EditButton  todos={todos} setTodos={setTodos} id={todo.id}/>
                    {/* <DoneButton todos={todos} setTodos={setTodos}/> */}
                    <button onClick={() => updateTask(todo.id)} >Done</button>
                  </div>
        })}
        <CreateTodo todos={todos} setTodos={setTodos}/> 
    </section>
  )
}


const List = styled.li`
list-style: none;
`;

const Finished = styled(List)`
text-decoration: line-through;
`;

export default TodosList