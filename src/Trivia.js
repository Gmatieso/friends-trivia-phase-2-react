import React, { Component } from 'react';
import './Trivia.css';
import axios from 'axios';
import HomePage from './HomePage';
import QuizQuestions from './QuizQuestions';

const api_url = 'https://csjeon28.github.io/Data/db.json';

class Trivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            startQuiz: false,
            endQuiz: false
        };
        this.startGame = this.startGame.bind(this);
    }

    async fetchQuestions() {
        let allData = await axios.get(api_url);
        const questions = allData.data.quizData.map(q => {
            return q.question
        })
        this.setState({
            questions: questions,
            username: this.props.username
        })
    };

    componentDidMount() {
        this.fetchQuestions();
    }

    startGame() {
        this.setState({
            startQuiz: true,
        })
    }

    render() {
        if (this.state.startQuiz === true) {
            return (
                <div>
                    <QuizQuestions username={this.state.username} />
                </div>
            )
        } else if (this.state.endQuiz === true) {
            return (
                <div>
                    <HomePage />
                </div>
            )
        }
        return (
            <div className='trivia'>
                <header>Current User: {this.props.username}</header>
                <div className='trivia-info-box'>
                    <div className='trivia-info-title'>
                        <span>Test Your Friends Knowledge! But first, a <span className='innerspan'>friendly</span> reminder:</span>
                    </div>
                    <div className='trivia-info-list'>
                        <div className='trivia-info'>1. Don't exit from the Trivia Game while you're playing. You'll have to start over.</div>
                        <div className='trivia-info'>2. You can check your answer to see if you got it right!</div>
                        <div className='trivia-info'>3. Last but not least, don't cheat!</div>
                    </div>
                    <div className='trivia-buttons'>
                        <button
                            className='trivia-quit'
                            onClick={() => { this.setState({ username: '', endQuiz: true }) }}>
                            Quit Game</button>
                        <button
                            className='trivia-continue'
                            onClick={this.startGame}>
                            Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trivia;
