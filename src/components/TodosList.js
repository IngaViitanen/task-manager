import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import TaskContext from '../context/Context'
import CreateTodo from './CreateTodo'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

// import DoneButton from './DoneButton'

const TodosList = () => {
  const { todos, setTodos, doneTasks, setDoneTasks } = useContext(TaskContext) 
  const [showDetails, setShowDetails] = useState(false)
  
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

  const moveTaskQue = () => {
    
  }

  return (
    <section>
        {todos.map((todo) => {
            return <Task key={todo.id}>
                  <CheckBox type="checkbox"  onClick={() => updateTask(todo.id)}></CheckBox>
                  {/* <CustomBox></CustomBox> */}
                    {todo.done === true ? 
                    (<Finished>{todo.title}</Finished>) 
                    : 
                    (<List>{todo.title}</List>)}
                    {/* <DeleteButton id={todo.id}/>  */}
                    {/* <EditButton  id={todo.id}/> */}

                    <Button onClick={moveTaskQue}></Button>
                  </Task>
        })}
        <CreateTodo /> 

        {doneTasks.map((task) => {
          return <li key={task.id}>{task.title}</li>
        })}
    </section>
  )
}

const Button = styled.button`
margin: 1rem;
background-color: transparent;
width: 30px;
height: 10px;
border: none;
border-top: 3px solid white;
border-bottom: 3px solid white;
cursor: grab;
&:active{
  cursor: grabbing;
}
`;

const CheckBox = styled.input`
margin: 1rem;
`;

const CustomBox = styled.span`
margin: 1rem;
`;



const Task = styled.article`
background-color: #383838;
margin: 1rem;
width: 260px;
height: 50px;
border-radius: 15px;
display: flex;
justify-content: space-around;
align-items: center;
`;

const List = styled.li`
list-style: none;
text-transform: capitalize;
font-size: 1.1rem;
width: 70%;
text-align: left;
`;

const Finished = styled(List)`
text-decoration: line-through;
`;


export default TodosList