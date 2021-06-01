import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    handleUsername(e) {

    }

    render() {
        return (
            <div className='homepage'>
                <div className='homepage-welcome'>
                    Welcome to the Friends Trivia Game!
                </div>
                <div className='homepage-image'>
                    <img src='/images/Friends door.jpeg' alt='Friends door'></img>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        So you think that you're a Friends fanatic? Test your knowledge of the
                        show and the characters with this simple trivia game.
                        Log in to play and track your score and compete with your friends!
                    </p>
                    <label>Username:</label>
                    <input type='text' value={this.username} onChange={this.handleUsername} />
                    <input type='submit' value='Log In' />
                </form>
            </div>
        )
    }
}

export default HomePage;