import React, { useState } from 'react';
import Trivia from './Trivia';
import QuizQuestions from './QuizQuestions';

function Score(props) {
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
        <div>
            <header>username={props.username}</header>
            <div className='score-container'>
                <div className='score-card'>
                    <h1>You've reached the end of the quiz!</h1>
                    <h2>Your score is: {props.score}</h2>
                </div>
                <button
                    className='score-restart-button'
                    onClick={() => setRestart(true)}
                >Restart Trivia Game
                </button>
                <button
                    className='score-exit-button'
                    onClick={() => setHomePage(true)}
                >Exit Game
                </button>
            </div>
        </div>
    )

}



export default Score;