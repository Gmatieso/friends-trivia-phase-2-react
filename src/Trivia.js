import React, { Component } from 'react';
import './Trivia.css';
import axios from 'axios';

const api_url = 'https://csjeon28.github.io/Data/db.json';

class Trivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            userAnswer: null,
            score: 0,
            gameReset: false,
            questionNumber: 0,
            totalQuestions: 0,
            question: '',
            correct: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
        };
        this.startGame = this.startGame.bind(this);
        this.loadNewQuestion = this.loadNewQuestion.bind(this);
        // this.fetchQuestions = this.fetchQuestions.bind(this);
    }

    // async componentDidMount() {
    //     const triviaQuestions = await axios.get(api_url);
    //     this.setState({ 
    //         allQuestions: triviaQuestions.data 
    //     });
    // }
    componentDidMount() {
        this.fetchQuestions();
    }

    fetchQuestions() {
        axios.get(api_url)
            .then(response => {
                this.setState({
                    question: response.data
                })
            })
    }

    startGame = () => {
        this.setState({
            gameStart: true,
            questionNumber: this.state.questionNumber + 1
        });
        this.loadNewQuestion();
    }

    loadNewQuestion = () => {
        const { questionNumber } = this.state
        this.setState({
            question: [questionNumber].question,
            answer1: [questionNumber].answer1,
            answer2: [questionNumber].answer2,
            answer3: [questionNumber].answer3,
            answer4: [questionNumber].answer4,
            correct: [questionNumber].correct,
            totalQuestions: [questionNumber].length
        })
        this.nextQuestion();
    }

    nextQuestion = () => {
        if (this.state.userAnswer === this.state.correct) {
            this.setState({ score: this.state.score + 1 })
        }
    }

    checkAnswer = (correct) => {
        this.setState({
            userAnswer: correct,
        })
    }

    finishGame = () => {
        if (this.state.questionNumber === [this.state.questionNumber].length - 1) {
            this.setState({
                gameReset: true
            })
        }
    }

    handleClick = () => {
        this.loadNewQuestion();
    }

    render() {

        return (
            <div className='trivia'>
                <div className='trivia-start-button'>
                    <button>Start Quiz</button>
                </div>
                <div className='trivia-info-box'>
                    <div className='trivia-info-title'>
                        <span>Test Your Friends Knowledge! But first, here are the rules:</span>
                    </div>
                    <div className='trivia-info-list'>
                        <div className='trivia-info'>1. You will have <span>10 seconds</span> to answer each question.</div>
                        <div className='trivia-info'>2. Don't exit from the Trivia Game while you're playing. You'll have to start over.</div>
                        <div className='trivia-info'>3. Last but not least, don't cheat!</div>
                    </div>
                    <div className='trivia-buttons'>
                        <button className='trivia-quit'>Quit Game</button>
                        <button className='trivia-continue' onClick={this.handleClick}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Trivia;
