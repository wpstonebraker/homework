import React from "react";
import Calculator from "./calculator";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  doMaths(e) {
    e.preventDefault();
    if (!this.state.num1 || !this.state.num2) return;
    const operator = e.target.innerText;
    const res = eval(`${this.state.num1} ${operator} ${this.state.num2}`);
    this.setState({ result: res });
  }

  render() {
    return <button />;
  }
}

export default Button;
