import React, { Component } from 'react';
import axios from 'axios';
import Score from './Score';
import GameTimer from './GameTimer';

const api_url = 'https://csjeon28.github.io/Data/db.json';

class QuizQuestions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuestionIndex: 0,
            userAnswer: '',
            score: 0,
            gameReset: false,
            allQuestions: [],
            disabledAnswerChoices: false,
            answer1: false,
            answer2: false,
            answer3: false,
            answer4: false,
            endQuiz: false,
            disabledAnswerCheck: true,
            selectedOption: ''
        }
        this.checkCorrectAnswer = this.checkCorrectAnswer.bind(this)
        this.incrementQuestionCount = this.incrementQuestionCount.bind(this)
    }

    async componentDidMount() {
        let allData = await axios.get(api_url);
        const questions = allData.data.quizData.map(q => {
            return q.question
        })
        const answer1 = allData.data.quizData.map(q => {
            return q.answer1
        })
        const answer2 = allData.data.quizData.map(q => {
            return q.answer2
        })
        const answer3 = allData.data.quizData.map(q => {
            return q.answer3
        })
        const answer4 = allData.data.quizData.map(q => {
            return q.answer4
        })
        const correct = allData.data.quizData.map(q => {
            return q.correct
        })
        this.setState({
            allQuestions: questions,
            answer1: answer1,
            answer2: answer2,
            answer3: answer3,
            answer4: answer4,
            correct: correct
        })
    }

    incrementQuestionCount = () => {
        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex + 1,
            disabledAnswerChoices: false,
            disabledAnswerCheck: true,
            correctAnswer: '',
            userAnswer: ''
        })
    }

    checkUserAnswer(userAnswer) {
        const { currentQuestionIndex, correct } = this.state;
        if (userAnswer === correct[currentQuestionIndex]) {
            return true
        } else { return false }
    }

    checkCorrectAnswer = () => {
        const { userAnswer, score, correct, currentQuestionIndex } = this.state
        if (this.checkUserAnswer(userAnswer)) {
            this.setState({
                score: score + 1
            })
        }
        this.setState({
            disabledAnswerChoices: true,
            correctAnswer: correct[currentQuestionIndex]
        })
    }

    logUserAnswer = (e) => {
        if (e.target.id === 'choice1') {
            this.setState({ answer1: this.state.answer1, userAnswer: e.target.value })
        }
        else if (e.target.id === 'choice2') {
            this.setState({ answer2: this.state.answer2, userAnswer: e.target.value })
        }
        else if (e.target.id === 'choice3') {
            this.setState({ answer3: this.state.answer3, userAnswer: e.target.value })
        }
        else if (e.target.id === 'choice4') {
            this.setState({ answer4: this.state.answer4, userAnswer: e.target.value })
        }
        this.setState({ disabledAnswerCheck: false })
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    render() {
        const { currentQuestionIndex, allQuestions, answer1, answer2, answer3, answer4, endQuiz, score } = this.state;
        let currentQuestion = allQuestions[currentQuestionIndex]
        let answer1Option = answer1[currentQuestionIndex]
        let answer2Option = answer2[currentQuestionIndex]
        let answer3Option = answer3[currentQuestionIndex]
        let answer4Option = answer4[currentQuestionIndex]

        if ((currentQuestionIndex <= allQuestions.length - 1) && (endQuiz === false)) {
            return (
                <div>
                    <header>{this.props.username}</header>
                    <div className='quizquestions'>
                        <h1>{currentQuestion}</h1>
                        <h3>{currentQuestionIndex + 1} of {allQuestions.length} Questions </h3>
                        <GameTimer />
                        <fieldset disabled={this.state.disabledAnswerChoices}>
                            <div className='options'>
                                <input
                                    id='choice1'
                                    onClick={this.logUserAnswer}
                                    type='radio'
                                    checked={this.state.selectedOption === answer1Option}
                                    onChange={this.handleOptionChange}
                                    value={answer1Option} />
                                {answer1Option}</div>
                            <div className='options'>
                                <input
                                    id='choice2'
                                    onClick={this.logUserAnswer}
                                    type='radio'
                                    checked={this.state.selectedOption === answer2Option}
                                    onChange={this.handleOptionChange}
                                    value={answer2Option} />
                                {answer2Option}</div>
                            <div className='options'>
                                <input
                                    id='choice3'
                                    onClick={this.logUserAnswer}
                                    type='radio'
                                    checked={this.state.selectedOption === answer3Option}
                                    onChange={this.handleOptionChange}
                                    value={answer3Option} />
                                {answer3Option}</div>
                            <div className='options'>
                                <input
                                    id='choice4'
                                    onClick={this.logUserAnswer}
                                    type='radio'
                                    checked={this.state.selectedOption === answer4Option}
                                    onChange={this.handleOptionChange}
                                    value={answer4Option} />
                                {answer4Option}</div>
                        </fieldset>

                        <div>
                            <button onClick={this.checkCorrectAnswer} disabled={this.state.disabledAnswerCheck}>Check Answer</button>
                            <span>Correct Answer: {this.state.correctAnswer}</span>
                        </div>
                        <button className='button' onClick={this.incrementQuestionCount} >Continue</button>
                    </div >
                    <div>
                        <center><button onClick={() => { this.setState({ endQuiz: true }) }} >End Quiz</button></center>
                        <br></br>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div >
                    <Score username={this.props.username} score={score} />
                    <br />
                </div>
            )
        }
    }

}
export default QuizQuestions;

