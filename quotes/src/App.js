
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes= ["all for one and one for all","divided we fall united we stand","Man is the only animal that blushes or needs to","All great things begin as blasphemies","it is an evident truth that all great men have their poor relations",
"to be or not to be: now that is the question","Your a wizard Harry!"]

class App extends Component {
  constructor(props){
    super(props);
    this.nextQuote = this.nextQuote.bind(this)
    this.state={
      index : 0
    }
  }

nextQuote(){
  var nextIndex = this.state.index +1
  if(quotes[nextIndex]){
    this.setState({
      index : nextIndex
    })
  }
}

  render() {
    return (
         <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Authors Quotes</h2>
      <p className="App-intro">
        {quotes[this.state.index]}</p>
       <button onClick={this.nextQuote}> Next Quote </button>
      </div>   
    );
  }
}
export default App



