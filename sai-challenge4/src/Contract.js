import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var that;
export default class Contract extends Component{
    constructor(props){
        super(props);

        this.state={
            contractName: 'Vinny',
            description: 'Gaddam',
            price: 23,
            index: this.props.index
        }
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
                        <button onClick={e => this.props.editContract(this.state.contractName,this.state.description,this.state.price,this.state.index)}>Edit</button>
                    </td>    
                </tr>
        )
    }
}