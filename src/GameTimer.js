import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react'

// class GameTimer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             seconds: 0
//         }
//     }

//     ticker() {
//         const { timeSpan, timeOut } = this.props;
//         if (this.state.seconds === timeSpan) {
//             timeOut()
//         } else {
//             this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
//         }
//     }
//     componentDidMount() {
//         this.interval = setInterval(() => this.ticker(), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         const { timeSpan } = this.props;
//         let secondsLeft = timeSpan - this.state.seconds;
//         return (
//             <div className='GameTimer'>
//                 Seconds Left: {secondsLeft}
//             </div>
//         )
//     }
// }

function GameTimer() {
    const [seconds, setSeconds] = useState(10)

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000)
        } else {
            setSeconds(`Time's Up!`)
        }
    })

    return (
        <div className='gametimer'>
            Seconds Left: {seconds}
        </div>
    )
}

export default GameTimer;

