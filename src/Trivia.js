import React, { Component } from 'react';
import axios from 'axios';
import './Trivia.css';

// const api_url = 'https://friends-quotes-api.herokuapp.com/quotes';
const api_url = 'https://csjeon28.github.io/Data/db.json';

class Trivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            initialGameState: true,
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
        // this.startGame = this.startGame.bind(this);
        // this.loadNewQuestion = this.loadNewQuestion.bind(this);
        this.fetchQuestions = this.fetchQuestions.bind(this);
    }

    // async componentDidMount() {
    //     const triviaQuestions = await axios.get(api_url);
    //     this.setState({ 
    //         allQuestions: triviaQuestions.data 
    //     });
    // }

    fetchQuestions() {
        axios.get(api_url)
            .then(response => {
                this.setState({
                    question: response.data.question,
                })
                console.log(response.data[0].question)
            })
    }

    componentDidMount() {
        this.fetchQuestions();
    }


    // startGame = () => {
    //     this.setState({
    //         gameStart: true,
    //         questionNumber: this.state.questionNumber + 1
    //     });
    //     this.loadNewQuestion();
    // }

    // loadNewQuestion = () => {
    //     this.setState({
    //         question: triviaQuestions[this.state.questionNumber].question,
    //         answer1: triviaQuestions[this.state.questionNumber].answer1,
    //         answer2: triviaQuestions[this.state.questionNumber].answer2,
    //         answer3: triviaQuestions[this.state.questionNumber].answer3,
    //         answer4: triviaQuestions[this.state.questionNumber].answer4,
    //         correct: triviaQuestions[this.state.questionNumber].correct,
    //         totalQuestions: triviaQuestions.length
    //     })
    // }

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
                        <button className='trivia-continue'>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trivia;

