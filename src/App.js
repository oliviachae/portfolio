import React, { Component } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <Subject title="Jiyoon's Personal Site" sub=" Hi, I am a web developer based in London, UK.
      I have a passion for web development and web design!"></Subject>
      <Introduce></Introduce>
      <Content></Content>
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
    <ol>    
      <li><a href="1.html">HTML</a></li>
      <li><a href="2.html">CSS</a></li>
      <li><a href="2.html">Javascript</a></li>
    </ol>
  </nav>
  
    );
  }
}
 
class Content extends Component {
  render() {
    return(
      <article>
  <h2>Welcome</h2>
  </article>
    );
  }
}

export default App;
