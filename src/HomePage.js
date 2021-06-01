import React, { Component } from 'react'

class HomePage extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    handleUsernameChange(e) {

    }

    render() {
        return (
            <div className='homepage'>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                    <input type='submit' value='Log In' />
                </form>
            </div>
        )
    }
}

export default HomePage;