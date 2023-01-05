// react imports
import { useState, useContext } from 'react'
import React from 'react'


// components imports
import Welcome from './components/Welcome'
import Question from './components/Question'
import { QuizContext } from './context/quiz'

// static imports
import './App.css'



function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
    </div>
  )
}

export default App
