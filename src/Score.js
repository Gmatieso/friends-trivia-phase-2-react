import React, { useState, useEffect } from 'react';
import Trivia from './Trivia';
import QuizQuestions from './QuizQuestions';
import './Score.css';
// import axios from 'axios';

const api_url = 'https://csjeon28.github.io/Data/db.json';

function Score(props) {
    const [homePage, setHomePage] = useState(false)
    const [restart, setRestart] = useState(false)

    // useEffect(() => {
    //     const score = { score: { score }, username: { username } };
    //     axios.post(api_url, score)
    //         .then(results =>
    //             setHomePage(results.data))
    // })

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