import { React, useContext } from "react";
import { QuizContext } from "../context/quiz";

import './GameOver.css';

import WellDone from '../img/welldone.svg'

const GameOver = () => {
    return (
        <div id="gameover">
            <h2>Game Over</h2>
            <p>Scoring: X</p>
            <p>You got y of z questions.</p>
            <img src={WellDone} alg="Game Over"/>
            <button>Restart</button>
        </div>
    );
};

export default GameOver;