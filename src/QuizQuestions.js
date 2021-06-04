import React, { Component } from 'react';
import axios from 'axios';
import Score from './Score';

const api_url = 'https://csjeon28.github.io/Data/db.json';

class QuizQuestions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuestionIndex: 0,
            userAnswer: null,
            score: 0,
            gameReset: false,
            questionNumber: 0,
            allQuestions: [],
            disabled: true,
            disabledAnswerChoices: false,
            answer1: false,
            answer2: false,
            answer3: false,
            answer4: false,
            endQuiz: false,
            disabledAnswerCheck: true
        }
        this.checkCorrectAnswer = this.checkCorrectAnswer.bind(this)
    }

    async componentDidMount() {
        let allData = await axios.get(api_url);
        const questions = allData.data.quizData.map(q => {
            return q.question
        })
        this.setState({
            allQuestions: questions
        })
    }

    incrementQuestionCount = () => {
        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex + 1,
            disabled: true,
            disabledAnswerChoices: false,
            disabledAnswerCheck: true,
            answer1: false,
            answer2: false,
            answer3: false,
            answer4: false,
            correctAnswer: '',
            userAnswer: ''
        })
    }

    checkUserAnswer(userAnswer) {
        const { currentQuestionIndex, allQuestions } = this.state;
        if (userAnswer === allQuestions[currentQuestionIndex].correct) {
            return true
        } else { return false }
    }

    checkCorrectAnswer = () => {
        const { userAnswer, score, allQuestions, currentQuestionIndex } = this.state
        if (this.checkUserAnswer(userAnswer)) {
            this.setState({
                score: score + 1
            })
        }
        this.setState({
            disabledAnswerChoices: true,
            disabled: false,
            correctAnswer: allQuestions[currentQuestionIndex].correct
        })
    }

    logUserAnswer = (e) => {
        if (e.target.id === "choice1") {
            this.setState({ answer1: e.target.checked, userAnswer: e.target.value })
        }
        else if (e.target.id === "choice2") {
            this.setState({ answer2: e.target.checked, userAnswer: e.target.value })
        }
        else if (e.target.id === "choice3") {
            this.setState({ answer3: e.target.checked, userAnswer: e.target.value })
        }
        else if (e.target.id === "choice4") {
            this.setState({ answer4: e.target.checked, userAnswer: e.target.value })
        }
        this.setState({ disabledAnswerCheck: false })
    }

    render() {
        const { currentQuestionIndex, allQuestions, endQuiz, score, userAnswer, correctAnswer } = this.state;
        let currentQuestion = allQuestions[currentQuestionIndex]

        if ((currentQuestionIndex <= allQuestions.length - 1) && (endQuiz === false)) {
            return (
                <div>
                    <header>{this.props.username}</header>
                    <div className="quizquestions">
                        <h1>{currentQuestion}</h1>
                        <h3>{currentQuestionIndex + 1} of {allQuestions.length} Questions </h3>
                        <fieldset disabled={this.state.disabledAnswerChoices}>
                            <div className="options">
                                <input
                                    id="choice1"
                                    onChange={this.logUserAnswer}
                                    type="radio"
                                    name="group1"
                                    value={currentQuestion.answer1}
                                    checked={this.state.answer1} />
                                {currentQuestion.answer1}</div>
                            <div className="options">
                                <input
                                    id="choice2"
                                    onChange={this.logUserAnswer}
                                    type="radio"
                                    name="group2"
                                    value={currentQuestion.answer2}
                                    checked={this.state.answer2} />
                                {currentQuestion.answer2}</div>
                            <div className="options">
                                <input
                                    id="choice3"
                                    onChange={this.logUserAnswer}
                                    type="radio"
                                    name="group3"
                                    value={currentQuestion.answer3}
                                    checked={this.state.answer3} />
                                {currentQuestion.answer3}</div>
                            <div className="options">
                                <input
                                    id="choice4"
                                    onChange={this.logUserAnswer}
                                    type="radio"
                                    name="group4"
                                    value={currentQuestion.answer4}
                                    checked={this.state.answer4} />
                                {currentQuestion.answer4}</div>
                        </fieldset>

                        <div>
                            <button onClick={this.checkCorrectAnswer} disabled={this.state.disabledAnswerCheck}>Check Answer</button>
                            <span>Your Choice: {userAnswer}</span>
                            <span>The Correct Answer: {correctAnswer}</span>
                        </div>
                        <button className="button" onClick={this.incrementQuestionCount} disabled={this.state.disabled}>Continue</button>
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

