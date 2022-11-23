import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import TaskContext from '../context/Context'
import CreateTodo from './CreateTodo'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

// import DoneButton from './DoneButton'

const TodosList = () => {
  const { todos, setTodos, doneTasks, setDoneTasks } = useContext(TaskContext)  
  
  const updateTask = (id) => {
    const findTask = todos.find(todo => todo.id === id)
    const todoCopy = {...findTask, done: todos.done = !todos.done}
    const finishedTasksArr = [...doneTasks, todoCopy]
    if(!findTask.done){
      markTaskDone(todoCopy)
      setDoneTasks(finishedTasksArr)
    }
  }

  const markTaskDone = (finished) => {
    const array = [...todos]
    let checkFinished = array.map((todo) => todo.id === finished.id ? finished : todo)
    if(checkFinished){
      setTodos(checkFinished)
    }
  }

  return (
    <section>
        {todos.map((todo) => {
            return <div key={todo.id}>
                    {todo.done === true ? 
                    (<Finished>{todo.title}</Finished>) 
                    : 
                    (<List>{todo.title}</List>)}
                    <DeleteButton id={todo.id}/> 
                    <EditButton  id={todo.id}/>
                    {/* <DoneButton todos={todos} setTodos={setTodos}/> */}
                    <button onClick={() => updateTask(todo.id)} >Done</button>
                  </div>
        })}
        <CreateTodo /> 

        {doneTasks.map((task) => {
          return <li key={task.id}>{task.title}</li>
        })}
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