import React, { Component } from "react";

function YourComponent1(props) {
  const { myname, myage, hobby } = props;
  return (
    <div>
      <p>이름 {myname}</p>
      <p>나이 {myage}</p>
      <ul>{hobby && hobby.map((item, idx) => <li>{item}</li>)}</ul>
    </div>
  );
}

class YourComponent2 extends Component {
  constructor(props) {
    super(props); //부모를 반드시 불러야 함. 생성자는 생략이 가능하나, 명시했을 경우 반드시 코드 전에 부모 생성자를 호출해야함.
    this.myname = "hyunhyun";
    this.score2 = 20;
  }
  study() {
    console.log(this.score2);
  }
  getScore() {}
  render() {
    const { myname, myage, hobby } = this.props;
    return (
      <div>
        <p>이름 {myname}</p>
        <p>나이 {myage}</p>
        <ul>{hobby && hobby.map((item, idx) => <li>{item}</li>)}</ul>
      </div>
    );
  }
}

export { YourComponent2 as default, YourComponent1 };
