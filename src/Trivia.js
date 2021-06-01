import React, { Component } from 'react';
import axios from 'axios';

// const api_url = {
// method: 'GET',
// url: 'https://friends-quotes-api.herokuapp.com/quotes',
// };

// axios.request(api_url).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

const api_url = 'https://friends-quotes-api.herokuapp.com/quotes';

class Trivia extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '', username: '', seconds: 0 };
    }

    async componentDidMount() {
        let allQuotes = await axios.get(api_url);
        this.setState({ allQuotes: allQuotes.data })
    }

    render() {
        return (
            <div className='trivia'>
                <div className='trivia-header'>
                    <h1>Friends Trivia</h1>
                </div>
                <h2>Question</h2>
                <div>Answer 1</div>
                <div>Answer 2</div>
                <div>Answer 3</div>
                <div>Answer 4</div>
            </div>
        )
    }
}

export default Trivia;