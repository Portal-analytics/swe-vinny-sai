import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import BottomNavigation from 'material-ui/BottomNavigation'

var quotes = ["Here is some fucking advice","Don't take out a fucking second mortgage","Ship some fucking code","Get fucking profitable","Act like you know what the fuck you're doing","Don't forget to eat your fucking lunch"];
class App extends React.Component {

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

randClick(){
  var newIndex = Math.floor((Math.random()*6));
  this.setState({
    currentIndex: newIndex
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MuiThemeProvider>
            <div>
          <AppBar title='Great Fucking Startup Advice'/>
        <RaisedButton className="order-button" label="Next" backgroundColor='orange' onClick={() => {this.onClick()}}></RaisedButton>
        <RaisedButton className="random-button" label="Random" backgroundColor='orange' onClick={() => {this.randClick()}}></RaisedButton>
    
        </div>
          </MuiThemeProvider>

        </div>
        {quotes[this.state.currentIndex]}
        <MuiThemeProvider>
          <BottomNavigation className='bottom-nav'/>
          </MuiThemeProvider> 
        </div>


    );
  }
}

export default App;
