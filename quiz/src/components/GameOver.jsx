import { React, useContext } from "react";
import { QuizContext } from "../context/quiz";

import './GameOver.css';

import WellDone from '../img/welldone.svg'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Game Over</h2>
            <p>Scoring: {quizState.score}</p>
            <p>You got {quizState.score} of {quizState.questions.length} questions.</p>
            <img src={WellDone} alg="Game Over"/>
            <button onClick={() => dispatch({type: 'NEW_GAME'})}>Restart</button>
        </div>
    );
};

export default GameOver;