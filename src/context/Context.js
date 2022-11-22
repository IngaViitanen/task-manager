import React, {createContext, useState} from 'react'

export const TaskContext = createContext(null)

export const TaskContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([ {title: 'walk the cat', id: 1, done: false}, {title: 'clean', id: 2,  done: false}, {title: 'go outside', id: 3,  done: false} ])

    const value = {
        todos,
        setTodos
    }

  return (
    <TaskContext.Provider value={value}> {children} </TaskContext.Provider>
  )
}

export default TaskContext