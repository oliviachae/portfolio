import React, { Component } from 'react';
import './App.css';
import picture from './selfi.jpg';
import css from './images/css.svg';
import html from './images/html-5.svg';
import JS from './images/javascript.svg';
import gitHub from './images/github-image.svg';
import gmail from './images/gmail.svg';
import instagram from './images/instagram.svg';

function App() {
  return (
    <div className="App">
      <Subject title="Jiyoon's Personal Site" 
      sub="Welcom to my website ❤"></Subject>
      <div>
      <img src={picture} alt='jiyoon' /> </div>
      <p> Hi, I am a web developer based in London, UK.<br />
       I have a passion for web development and web design!</p>
       <hr />
      <Introduce></Introduce>
      <hr />

      <Content></Content>

      <div className='container'>
        <div className='item'><a href="https://github.com/oliviachae/portfolio/commits/master"><img className='icons' src={gitHub} 
        alt='github link' /> </a></div>
        <div className='item'> <img className='icons' src={gmail} alt='contact by email' /></div>
        <div className='item'><img className='icons' src={instagram} alt='instagram' /></div>
      </div>
      <br />
      <br />
      <br />

    </div>
  );
}

class Subject extends Component {
  render() {
    return(
      <header>
    <h1>{this.props.title}</h1>
     {this.props.sub}
  <hr></hr>
  </header>   
    );

  }
}

class Introduce extends Component {
  render() {
    return(
      <nav>
        <h2>What I can do</h2>
       
      <li><a href="1.html">
        <img className='icons' src={html} alt="html" />
        HTML</a></li>
    
      <li><a href="2.html">
      <img className='icons' src={css} alt="css" />
        CSS</a></li>
      <li><a href="3.html">
      <img className='icons' src={JS} alt="JavaScript" />
        Javascript</a></li>
    

    
  </nav>
  
    );
  }
}
 
class Content extends Component {
  render() {
    return(
      <article>
  <h2>Contact Me</h2>
  </article>
    );
  }
}



export default App;
