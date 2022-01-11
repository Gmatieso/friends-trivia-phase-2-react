import React, { useState } from 'react';
import Trivia from './Trivia';
import QuizQuestions from './QuizQuestions';
import './Score.css';

const Score = (props) => {
    const [homePage, setHomePage] = useState(false)
    const [restart, setRestart] = useState(false)

    if (homePage === true) {
        return (
            <div>
                <Trivia />
            </div>
        )
    } else if (restart === true) {
        return (
            <div>
                <QuizQuestions username={props.username} />
            </div>
        )
    }

    return (
        <div className='score'>
            <header>Current User: {props.username}</header>
            <div className='score-container'>
                <div className='score-card'>
                    <h1>You've reached the end of the game!</h1>
                    <h2>Your score: {props.score}.</h2>
                    <h3>{(props.score / props.allQuestionCount * 100).toFixed(2)}%</h3>
                    <h4>{homePage}</h4>
                </div>
                <div className='score-buttons'>
                    <button
                        className='restart'
                        onClick={() => setRestart(true)}
                    >Restart</button>

                    <button
                        className='exit'
                        onClick={() => setHomePage(true)}
                    >Exit</button>

                </div>
            </div>
            <img src='/images/RachelPhoebe.gif' alt='Rachel and Phoebe excited'></img>
        </div>
    )
}

export default Score;