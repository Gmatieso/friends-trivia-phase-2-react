import React, { Component } from 'react';
import './HomePage.css';
import Trivia from './Trivia';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            gameStart: false
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.startTrivia = this.startTrivia.bind(this)
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    startTrivia() {
        if (this.state.username !== '') {
            this.setState({
                gameStart: true
            })
        }
    }

    render() {
        const { gameStart } = this.state;
        if (gameStart === true) {
            return (
                <div>
                    <Trivia username={this.state.username} />
                </div>
            )
        }
        return (
            <div className='homepage'>
                <div className='homepage-welcome'>
                    Welcome to the Friends Trivia Game!
                </div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        So you think that you're a Friends fanatic? Test your knowledge of the
                        show and the characters with this simple trivia game.
                        Log in to play and track your score and compete with your friends!
                    </p>
                    <label>Username:</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsername} />
                    <input
                        type='button'
                        value='Log In'
                        className='homepage-username-button'
                        disabled={this.state.username.length < 4}
                        onClick={this.startTrivia}
                    />
                    <h5>Your username must be at least 4 characters.</h5>
                    <img src='/images/Friends door.jpeg' alt='Friends door'></img>
                </form>
            </div>
        )
    }
}

export default HomePage;