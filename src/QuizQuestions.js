import React, { Component } from 'react';
import axios from 'axios';

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

    //nextQuestionHander

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default QuizQuestions;



        // answer1: allData.data.quizData.map(q => {
        //     return q.answer1
        // }),
        // answer2: allData.data.quizData.map(q => {
        //     return q.answer2
        // }),
        // answer3: allData.data.quizData.map(q => {
        //     return q.answer3
        // }),
        // answer4: allData.data.quizData.map(q => {
        //     return q.answer4
        // }),
        // correctChoice: allData.data.quizData.map(q => {
        //     return q.correct
        // }),


// this.state = {
    // userAnswer: null,
    // score: 0,
    // gameReset: false,
    // questionNumber: 0,
    // questions: [],
    // answer1: [],
    // answer2: [],
    // answer3: [],
    // answer4: [],
    // correctChoice: [],
    // disabled: true,
