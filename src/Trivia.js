import React, { Component } from 'react';
import axios from 'axios';
import './Trivia.css';

const api_url = 'https://friends-quotes-api.herokuapp.com/quotes';

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
    }

    async componentDidMount() {
        let allQuotes = await axios.get(api_url);
        this.setState({ quotes: allQuotes.data })
        // let quote1 = this.state.quotes[0].quote
        // let quote2 = this.state.quotes[1].quote
        // let quote3 = this.state.quotes[2].quote
        // let quote4 = this.state.quotes[3].quote
        // let quote5 = this.state.quotes[4].quote
        // let quote6 = this.state.quotes[5].quote
        // let quote7 = this.state.quotes[6].quote
        // let quote8 = this.state.quotes[7].quote
        // let quote9 = this.state.quotes[8].quote
        // let quote10 = this.state.quotes[9].quote
        // let quote11 = this.state.quotes[10].quote
        // let quote12 = this.state.quotes[11].quote
        // let quote13 = this.state.quotes[12].quote
        // let quote14 = this.state.quotes[13].quote
        // let quote15 = this.state.quotes[14].quote
        // let quote16 = this.state.quotes[15].quote
        // let quote17 = this.state.quotes[16].quote
        // let quote18 = this.state.quotes[17].quote
    }

    getQuestions() {

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
                        <button className='trivia-continue'>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trivia;

