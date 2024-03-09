import { useState } from 'react'

import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1> Machine Leaning Flashcard</h1>
      <h2>There are 10 questions. Let's check them out! </h2>
      <div className ="card">
        <div className ="question"><h2>Question</h2></div>
        <div className = "answer">
          <button className = "btn">Check Answer</button>
          <button className = "btn">Next Question</button>
        </div>

      </div>
    </div>
  )
}

export default App