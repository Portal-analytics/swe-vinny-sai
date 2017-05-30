import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var that;
export default class Contract extends Component{
    constructor(props){
        super(props);

        this.state={
            contractName: this.props.contractName,
            description: this.props.description,
            price: this.props.price,
            index: this.props.index
        }

        this.handleNameEdit.bind(this);
        this.handleDescriptionEdit.bind(this);
        this.handlePriceEdit.bind(this);
    }
    

    handleNameEdit(e){
        this.setState({
            contractName: e.target.value
        })
    }

     handleDescriptionEdit(e){
        this.setState({
            description: e.target.value
        })
    }

     handlePriceEdit(e){
        this.setState({
            price: e.target.value
        })
    }

    onsubmit(e){
        this.props.editContract(this.state.contractName,this.state.description,this.state.price,this.props.index)
    }

    render(){

        //var editContract = this.props.editContract;

        //var that = this;
        return(
                <tr>
                    <td>{this.props.contractName}</td>  
                    <td>{this.props.description}</td>    
                    <td>{this.props.price}</td>
                    <td>
                        <input placeholder='Edit Contract Name' type='text' id='Contract Name' onChange={e => this.handleNameEdit(e)}/>
                        <input placeholder='Edit Description' label='description' type='text' id='description'   onChange={e => this.handleDescriptionEdit(e)}/>
                        <input placeholder='Edit Price' label='price' type='text' id='price'   onChange={e => this.handlePriceEdit(e)}/>
                        <button onClick={e => this.onsubmit(e)}>Done</button>
                    </td>        
                </tr>
        )
    }
}