import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className='aboutpage'>
                <h1>
                    F<span className='red-span'>&#183;</span>
                    r<span className='blue-span'>&#183;</span>
                    i<span className='yellow-span'>&#183;</span>
                    e<span className='red-span'>&#183;</span>
                    n<span className='blue-span'>&#183;</span>
                    d<span className='yellow-span'>&#183;</span>
                    s
                </h1>
                <div className='about'>
                    Friends is one of the most popular TV shows, created by producers Kevin S. Bright,
                    Marta Kauffman, and David Crane, that aired from 1994-2004. It's a comedy TV series
                    about 6 friends, living in Manhattan, going through life together.
                </div>
                <img src='./images/FriendsCastPic.jpeg' alt='friends-cast'></img>
                <div className='aboutpage-characters'>
                    The
                    m<span className='red-span'>&#183;</span>
                    a<span className='blue-span'>&#183;</span>
                    i<span className='yellow-span'>&#183;</span>
                    n
                    c<span className='red-span'>&#183;</span>
                    a<span className='blue-span'>&#183;</span>
                    s<span className='yellow-span'>&#183;</span>
                    t
                    (from left to right):{"\n"}
                    Ross Geller, played by David Schwimmer,{"\n"}
                    Rachel Green, played by Jennifer Aniston,{"\n"}
                    Monica Geller, played by Courteney Cox,{"\n"}
                    Chandler Bing, played by Matthew Perry,{"\n"}
                    Phoebe Buffay, played by Lisa Kudrow, and{"\n"}
                    Joey Tribbiani, played by Matt LeBlanc.
                </div>
                <h2>
                    A<span className='red-span'>&#183;</span>
                    b<span className='blue-span'>&#183;</span>o
                    <span className='yellow-span'>&#183;</span>u
                    <span className='red-span'>&#183;</span>t&nbsp;
                    M<span className='blue-span'>&#183;</span>e
                </h2>
                <div
                    className='about-me'>
                    Hello~ My name is Christine Jeon. I absolutely love Friends and can
                    probably recite every single line from every episode of every season
                    of this series. I was very excited about the Friends Reunion on HBO Max
                    and thought I'd create a trivia game for my fellow Friends lovers. See if
                    you're also a Friends fanatic and can answer all of the trivia questions!
                    You'll be able to see your score at the end!{"\n"}
                    Good luck!
                </div>
            </div>
        )
    }
}

export default AboutPage;