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
                    <div>
                        The One With The {"\n"}
                    </div>
                    <div className='homepage-friends-title'>
                        F<span className='red-span'>&#183;</span>
                        r<span className='blue-span'>&#183;</span>
                        i<span className='yellow-span'>&#183;</span>
                        e<span className='red-span'>&#183;</span>
                        n<span className='blue-span'>&#183;</span>
                        d<span className='yellow-span'>&#183;</span>
                        s Trivia
                    </div>
                </div>
                <img src='/images/Friendsdoor.jpeg' alt='Friends door'></img>
                <div className='homepage-paragraph'>
                    Do you think you're a Friends fanatic? Test your knowledge of the
                    show and the characters with this simple trivia game.
                    Create a username to play. You can see your score at the end!
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:&nbsp;</label>
                        <input
                            className='homepage-input-box'
                            type='text'
                            value={this.state.username}
                            onChange={this.handleUsername} />
                        <input
                            type='button'
                            value='Log In'
                            className='homepage-username-button'
                            disabled={this.state.username.length < 4}
                            onClick={this.startTrivia}
                        />
                    </form>
                    <h5>Your username must be at least 4 characters.</h5>
                </div>
            </div>
        )
    }
}

export default HomePage;