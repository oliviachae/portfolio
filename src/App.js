import React, { Component } from "react";
import "./App.css";
import picture from "./selfi.png";
import css from "./images/css.svg";
import html from "./images/html-5.svg";
import JS from "./images/javascript.svg";
import gitHub from "./images/github-image.svg";
import gmail from "./images/gmail.svg";
import instagram from "./images/instagram.svg";
import Menu from "./Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />

      <div className="headerContainer">
        <div className="headerItem">
          <img className="selfi" src={picture} alt="jiyoon" />
        </div>
        <div className="headerItem title">
          <Subject
            title="Jiyoon's Personal Site"
            sub="Welcome to my website ❤"
          ></Subject>
          <p>
            Hi, I am a web developer based in London, UK.
            <br />I have a passion for web development and web design!
          </p>
        </div>
        <div className="headerItem"></div>
      </div>
      <hr />
      <Introduce></Introduce>
      <hr />

      <Content></Content>

      <div className="container">
        <div className="item">
          <a href="https://github.com/oliviachae/portfolio/commits/master">
            <img className="icons" src={gitHub} alt="github link" />{" "}
          </a>
        </div>
        <div className="item">
          {" "}
          <img className="icons" src={gmail} alt="contact by email" />
        </div>
        <div className="item">
          <img className="icons" src={instagram} alt="instagram" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class Introduce extends Component {
  render() {
    return (
      <nav>
        <h1>What I can do</h1>

        <div className="skillContainer">
          <div className="skillItem">
            <a href="1.html">
              <h1>HTML</h1>
              <img className="icons" src={html} alt="html" />
            </a>
          </div>

          <div className="skillItem">
            <a href="2.html">
              <h1>CSS</h1>
              <img className="icons" src={css} alt="css" />
            </a>
          </div>

          <div className="skillItem">
            <a href="3.html">
              <h1>Java Script</h1>
              <img className="icons" src={JS} alt="JavaScript" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h1>Contact Me</h1>
      </article>
    );
  }
}

export default App;
