import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  add(e) {
    e.preventDefault();
    const result = eval(`${this.state.num1} + ${this.state.num2}`);
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    const result = eval(`${this.state.num1} - ${this.state.num2}`);
    this.setState({ result });
  }

  multiply(e) {
    e.preventDefault;
    const result = eval(`${this.state.num1} * ${this.state.num2}`);
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    const result = eval(`${this.state.num1} / ${this.state.num2}`);
    this.setState({ result });
  }

  render() {
    const { num1, num2, result } = this.state;
    const { handleChange, add, subtract, multiply, divide } = this;
    return (
      <div>
        <h1>{result}</h1>

        <input onChange={handleChange} value={num1} name="num1" />
        <input onChange={handleChange} value={num2} name="num2" />
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>+</button>
      </div>
    );
  }
}

export default Calculator;
