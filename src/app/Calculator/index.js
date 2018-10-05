import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  state = {
    name: 'Carlos',
    number1: 0,
    number2: 0,
    result: 0
  }
  // constructor(){
  //   super();
  //   this.handleChange = this.handleChange.bind(this);
  // }

  componentDidMount() {
    this.setState({
      name: 'Cristina'
    });
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({
      [name]: Number(value)
    })
  }

  handleClick = () => {
    const result = this.state.number1 + this.state.number2;
    this.setState({
      result
    })
  }

  render() {
    return (
      <div className="Calculator">
        <input 
          name="number1" 
          type="number" 
          value={this.state.number1}
          onChange={this.handleChange}
        />
        {' + '}
        <input 
          name="number2" 
          type="number" 
          value={this.state.number2}
          onChange={this.handleChange}
        />

        <button
          onClick={this.handleClick}
        >
          =
        </button>
        <span>{this.state.result}</span>
      </div>
    )
  }
}

export default Calculator;