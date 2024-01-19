import React, { Component } from "react";

class StateTest extends Component {
  constructor() {
    super();
    this.state = { count: 0, message: "state manage by class" };
    this.handleClick2 = this.handleClick2.bind(this);
    //consturctor 내부에 있어도 화살표 함수 아니면 바인딩 필요
    this.handleClick3 = (e) => {
      var target = e.target.innerHTML;

      if (target === "증가") {
        this.setState({
          count: this.state.count + 1,
          message: "ADD",
        });
      } else {
        this.setState({
          count: this.state.count - 1,
          message: "MINUS",
        });
      }
    };
  }
  //선언함수 :this (this를 객체를 연결)
  //화살표 함수 : this가 자동연결
  handleClick = (e) => {
    var target = e.target.innerHTML;

    if (target === "증가") {
      this.setState({
        count: this.state.count + 1,
        message: "ADD",
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        message: "MINUS",
      });
    }
  };
  //선언함수의 this는 바인딩 없을 경우 그냥 window가 됨.
  handleClick2(e) {
    var target = e.target.innerHTML;

    if (target === "증가") {
      this.setState({
        count: this.state.count + 1,
        message: "ADD",
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        message: "MINUS",
      });
    }
  }
  render() {
    const { count, message } = this.state;
    // this.state.count = 100 //불가
    // this.setState({count:count+100}); //가능
    return (
      <div>
        <p>
          현재값:{this.state.count} ------- {this.state.message}
        </p>
        <p>
          현재값:{count} ------- {message}
        </p>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
              message: "ADD",
            })
          }
        >
          증가
        </button>
        <button onClick={this.handleClick}>증가</button>
        <button onClick={this.handleClick}>감소</button>
        <button onClick={this.handleClick2}>감소2</button>
        <button onClick={this.handleClick3}>감소3</button>
      </div>
    );
  }
}

export default StateTest;
