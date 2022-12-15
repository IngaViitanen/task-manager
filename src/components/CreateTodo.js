import React, { useState, useContext } from 'react'
import TaskContext from '../context/Context'
import styled from 'styled-components'

const CreateTodo = ({showCreate, setShowCreate}) => {
    const { todos, setTodos } = useContext(TaskContext)
    const [todo, setTodo] = useState('')

    const newTodo = {
        title: todo,
        id: Math.random(),
        done: false
      }

    const addTodo = (newTodo) => {
        const newTodoArray = [...todos, newTodo]
        setTodos(newTodoArray)
    }

    const submitTodo = () => {
        addTodo(newTodo)
        setTodo('')
        setShowCreate(!showCreate)
      }

  return (
    <Background>
    <Section>
        <Input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <Button onClick={submitTodo}>save</Button>
    </Section>
    </Background>
  )
}

const Background = styled.div`
    background: rgb(0 0 0 / 82%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

const Section = styled.section`
    position: relative;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    height: 100px;
    width: 310px;
    background-color: #221955;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid white;
`;

const Input = styled.input`
    padding: 0.65rem;
    width: 160px;
    border: none;
    border-radius: 15px;
    font-size: 1.1rem;
    margin-right: 15px;
`;

const Button = styled.button`
    border: 1px solid white;
    background-color: #4F8A9C;
    padding: 0.5rem;
    border-radius: 15px;
    color: #fff;
    font-size: 1.2rem;
    width: 60px;
    height: 40px;
`;

export default CreateTodo