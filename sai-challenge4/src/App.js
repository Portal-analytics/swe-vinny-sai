import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contract from './Contract.js'

var index = 0;
class App extends Component {
constructor(props){
  super(props);

  this.state={
    name: '',
    description: '',
    price: '',
    index: index,

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

    console.log(this.state.name);
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
      index: (this.state.index)
    }])
  })
  index+=1;
  console.log(this.state.contract_list)
}

editContract(c, d, p){
    this.setState({
      contract_list: [{
        name: c,
        description: d,
        price: p
      }]
    })
    console.log(this.state.contract_list)
}


  render() {
    const contractList = this.state.contract_list.map((contract)=>
        <Contract contractName={contract.name} description={contract.description} index={0} price={contract.price} editContract={(e,x,y) => this.editContract(e,x,y)}/>
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
