import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = ["Click Me","Don't take out a fucking second mortgage","Ship some fucking code","Get fucking profitable","Act like you know what the fuck you're doing","Don't forget to eat your fucking lunch"];
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      currentIndex:0
    }
  }
  onClick(){
      var newIndex = this.state.currentIndex+1
      console.log("we are setting state");
      this.setState({
      currentIndex: newIndex
    })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Great Fucking {<br></br>} Startup Advice </h2>

        </div>
        {quotes[this.state.currentIndex]}
        <button className="App-button" onClick={() => {this.onClick()}}></button>
        </div>


    );
  }
}

export default App;
