import React from 'react'

import Quiz from '../img/quiz.svg'
import "./Welcome.css"

const Welcome = () => {
  return (
    <div id='welcome'>
        <h2>Welcome</h2>
        <p>Click the button to start</p>
        <button>Start</button>
        <img src={Quiz} alt='Quiz start' />
    </div>
  )
}

export default Welcome