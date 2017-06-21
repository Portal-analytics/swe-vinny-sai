import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const quotes=['Believe in yourself! Have faith in your abilities!','If you can dream it, you can do it','Do not wait; the time will never be just right','Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.','The future belongs to those who believe in the beauty of their dreams.','Aim for the moon. If you miss, you may hit a star.']
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      currentIndex: 0 
    }
    
    // this.getNextQuote.bind(this);
  }

  getNextQuote(){
    var newIndex = this.state.currentIndex +1;
    if(quotes[newIndex]){
      this.setState({
        currentIndex: newIndex
      })
  }
}

getPreviousQuote(){
  var newIndex = this.state.currentIndex -1;
  if(quotes[newIndex]){
    this.setState({
      currentIndex: newIndex
    })
  }
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Motivational Advice! (without Profanity)</h2>
        </div>
        <p className="App-intro">
            {quotes[this.state.currentIndex]}
        </p>
        <button onClick={() => this.getPreviousQuote()}>Previous Quote</button>
        <button onClick={() => this.getNextQuote() }>Next Quote</button>
      </div>
    );
  }
}

export default App;
