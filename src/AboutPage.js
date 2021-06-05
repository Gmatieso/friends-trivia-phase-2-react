import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className='aboutpage'>
                <h1>Friends TV Show</h1>
                <div className='about'>
                    Friends is one of the most popular TV shows that aired from 1994-2004.
                    It's about 6 friends, living in Manhattan, going through life together.
                </div>
                <img src='./images/FriendsCastPic.jpeg' alt='friends-cast'></img>
                <div className='aboutpage-characters'>
                    The main characters (from left to right):
                    Ross Geller, played by David Schwimmer,
                    Rachel Green, played by Jennifer Aniston,
                    Monica Geller, played by Courteney Cox,
                    Chandler Bing, played by Matthew Perry,
                    Phoebe Buffay, played by Lisa Kudrow, and
                    Joey Tribbiani, played by Matt LeBlanc.
                </div>
                <h2>About Me</h2>
                <div>
                    Hello~ My name is Christine Jeon. I absolutely love Friends and can
                    probably recite every single line from every episode of every season
                    of this series. I was very excited about the Friends Reunion on HBO Max
                    and thought I'd create a trivia game for my fellow Friends lovers. See if
                    you're also a Friends fanatic and can answer all of the trivia questions!
                    You'll be able to see your score at the end!
                    Good luck!
                </div>
            </div>
        )
    }
}

export default AboutPage;