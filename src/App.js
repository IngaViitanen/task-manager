import React from 'react'
import './App.css';
import Header from './components/Header';
import TodosList from './components/TodosList';
import { TaskContextProvider } from './context/Context';

function App() {
  return (
    <div className="App">
    <TaskContextProvider>
      <Header />
      <TodosList />
    </TaskContextProvider>
    </div>
  );
}

export default App;
