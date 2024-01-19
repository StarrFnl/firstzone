import React, { Component } from "react";

export const MyFunc = function () {
  return (
    <div>
      <p>My FUNK!!!!!!</p>
    </div>
  );
};

class Content extends Component {
  //Component를 상속받았음. class 내부에 함수를 만들어 사용
  display() {
    console.log("class에서 함수를 추가함.");
  }
  //render가 필수
  render() {
    return (
      <div>
        <section>
          <article>
            <h1>React 학습</h1>
            <p>Props</p>
            <p>state</p>
            <p>Component</p>
            <button onClick={this.display}>버튼</button>
            {this.display()}
            <hr></hr>
          </article>
        </section>
      </div>
    );
  }
}

export default Content;
