import React, { Component } from 'react'

class GameTimer extends Component {
    ticker() {
        const { timeSpan } = this.props;
        this.state.seconds === timeSpan
            ? 
        : this.setState((prevState) => ({ seconds: prevState.seconds + 1 }))
    }

    render() {
        return (
            <div className='GameTimer'>
                <p>Seconds Left: {secondsLeft}</p>
            </div>
        )
    }
}

export default GameTimer;