import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import TaskContext from '../context/Context'
import CreateTodo from './CreateTodo'
// import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
// import EditTodo from './EditTodo'

// import DoneButton from './DoneButton'

const TodosList = () => {
  const { todos, setTodos, doneTasks, setDoneTasks } = useContext(TaskContext) 
  const [showCreate, setShowCreate] = useState(false)
  const dragTask = useRef(null)
  const dragOverTask = useRef(null)
  
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


  const handleDrag = () => {
    let tasksDupe = [...todos]
    const draggedTaskContent = tasksDupe.splice(dragTask.current, 1)[0]
    tasksDupe.splice(dragOverTask.current, 0, draggedTaskContent)
    dragTask.current = null
    dragOverTask.current = null
    setTodos(tasksDupe)
  }

  return (
    <section>
        {todos.map((todo, index) => {
            return <StyledTask 
                    draggable
                    key={todo.id}
                    onDragStart={(e) => dragTask.current = index}
                    onDragEnter={(e) => dragOverTask.current = index}
                    onDragEnd={handleDrag}
                    onDragOver={(e) => e.preventDefault()}
                    >
                  <StyledInput type="checkbox"  onClick={() => updateTask(todo.id)}></StyledInput>
                  {/* <CustomBox></CustomBox> */}
                    
                    {/* <DeleteButton id={todo.id}/>  */}
                    <EditButton id={todo.id}/>
                      
                    <StyledButton></StyledButton>
                  </StyledTask>
        })}

        {
        showCreate 
        ? 
        <CreateTodo showCreate={showCreate} setShowCreate={setShowCreate}/> 
        :
        <StyledCreateBtn onClick={() => setShowCreate(!showCreate)} >+</StyledCreateBtn>
        }
        

        {doneTasks.map((task) => {
          return <li key={task.id}>{task.title}</li>
        })}
    </section>
  )
}

const StyledCreateBtn = styled.button`
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 90px;
    background-color: #888;
    font-size: 3.3rem;
    font-weight: bold;
    padding: 0;
    cursor: pointer;
`;

const StyledButton = styled.button`
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

const StyledInput = styled.input`
    margin: 1rem;
    cursor: pointer;
`;

const CustomBox = styled.span`
    margin: 1rem;
`;



const StyledTask = styled.article`
    background-color: #383838;
    margin: 1rem;
    width: 260px;
    height: 50px;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export default TodosList