import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import TaskContext from '../context/Context'
import CreateTodo from './CreateTodo'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

// import DoneButton from './DoneButton'
// TODO:
// round checkmark to finish tasks, can click entire task to mark finished
// hold 2sec to edit
// delete button appears when in edit mode

const TodosList = () => {
  const { todos, setTodos, doneTasks, setDoneTasks } = useContext(TaskContext) 
  
  useEffect(() => {
    if(doneTasks.length === 1){
      console.log('FIRST TASK FINISHED')
    } else if(doneTasks.length === 5){
      console.log("FIFTH TASK FINISHED")
    }
  
  }, [doneTasks])
  
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

  const openDetails = () => {
    console.log('open details')
  }

  return (
    <section>
        {todos.map((todo) => {
            return <div key={todo.id}>
                  <input type="checkbox"  onClick={() => updateTask(todo.id)}></input>
                    {todo.done === true ? 
                    (<Finished>{todo.title}</Finished>) 
                    : 
                    (<List>{todo.title}</List>)}
                    <DeleteButton id={todo.id}/> 
                    <EditButton  id={todo.id}/>

                    <button onClick={openDetails}>...</button>
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