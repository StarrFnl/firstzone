import React, { Component } from "react";

class StateClassComponent extends Component {
  state = { su: 0 };
  constructor(props) {
    super();
    this.state = { su: 0 };
    this.plus.bind(this);
  }
  //선언적 함수
  plus = () => {
    this.setState({ su: this.state.su + 1 });
  };

  plus2 = () => {
    this.setState({ su: this.state.su + 1 }, () => {
      console.log("더하기 잘 되고있나?" + this.state.su);
    }); //callback 통해서 종료 후 console 찍음
  };

  buttonClick = (e) => {
    let btnText = e.target.innerHTML;
    if (btnText === "+") {
      this.setState({ su: this.state.su + 1 });
    } else if (btnText === "-") {
      this.setState({ su: this.state.su - 1 });
      //상태 값을 직접 변경하지 못함. setState로만 가능
    }
  };
  render() {
    const { su } = this.state;
    return (
      <div>
        <h1>StateClassComponent Practice</h1>
        <p>
          현재값: {this.state.su}........{su}
        </p>
        <button onClick={() => this.setState({ su: su + 1 })}>+</button>
        <button onClick={this.plus}>-</button>
        <button onClick={this.plus2}>-</button>
        <button onClick={this.buttonClick}>-</button>
      </div>
    );
  }
}

export default StateClassComponent;
