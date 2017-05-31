import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contract from './Contract.js'
import * as firebase from "firebase"

var index = 0;
var config = {
    apiKey: "AIzaSyD8ruCR99nsDSL44GqhSZOu9nC_i6RftOY",
    authDomain: "contracts-b9532.firebaseapp.com",
    databaseURL: "https://contracts-b9532.firebaseio.com",
    projectId: "contracts-b9532",
    storageBucket: "contracts-b9532.appspot.com",
    messagingSenderId: "632497945652"
};
firebase.initializeApp(config);

const fb = firebase  
  .database()
  .ref();


class App extends Component {
constructor(props){
  super(props);

  this.state={
    name: '',
    description: '',
    price: '',

    contract_list : []
  }

  //this.onsubmit.bind(this);
  this.handleChangeName.bind(this);
  this.handleChangeDescription.bind(this);
  this.handleChangePrice.bind(this);
  this.onsubmit.bind(this);
  this.editContract.bind(this);
}


handleChangeName(event){
    this.setState({
      name: event.target.value
    });
}

handleChangeDescription(event){
    this.setState({
      description: event.target.value
    })
}

handleChangePrice(event){
    this.setState({
      price: event.target.value
    })
}

onsubmit(e){


  e.preventDefault();

  this.setState({
    contract_list: this.state.contract_list.concat([{
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      index: index
    }])
  })
  index+=1;
  
  console.log(this.state.contract_list)
}

editContract(c, d, p,i){

    var updated_contracts = this.state.contract_list
    updated_contracts[i] = {
      name : c,
      description: d, 
      price: p,
      index: i
    }
    this.setState({
      contract_list: updated_contracts
    })
    console.log(this.state.contract_list)
}

// componentWillMount() {  
//     this.firebaseRef = firebase.database().push({
//         name: this.state.name,
//       description: this.state.description,
//       price: this.state.price,
//       index: index
//     })
// }

componentWillUnmount() {  
    this.firebaseRef.off();
};


  render() {
    const contractList = this.state.contract_list.map((contract)=>
        <Contract contractName={contract.name} description={contract.description} index={contract.index} price={contract.price} editContract={(e,x,y,i) => this.editContract(e,x,y,i)}/>
    )
    return (
  
      <div className="App">
        <div className="App-header">
          <h2>Contact Tracker</h2>
        </div>
        <p className="App-intro">
          <input placeholder='Contract Name' type='text' id='Contract Name' onChange={e => this.handleChangeName(e)} value={this.state.name}/>
          <input placeholder='Description' label='description' type='text' id='description'   onChange={e => this.handleChangeDescription(e)} value={this.state.description}/>
          <input placeholder='Price' label='price' type='text' id='price'   onChange={e => this.handleChangePrice(e)} value={this.state.price}/>
          <button onClick={e => this.onsubmit(e)}>
            Submit
           </button> 
        </p>
        <table>
          <tr>
            <th>____Contract____</th>
            <th>____Description____</th>
            <th>____Price___</th>
          </tr>
            {contractList}
        </table>
      </div>
    );
  }
}

export default App;
