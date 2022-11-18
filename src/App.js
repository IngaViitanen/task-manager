import React from 'react'
import './App.css';
import Header from './components/Header';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodosList />
    </div>
  );
}

export default App;
