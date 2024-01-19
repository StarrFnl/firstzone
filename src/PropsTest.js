import React, { Component } from "react";

//리터럴+화살표 함수 방식. 익명함수를 변수에 넣음
const MyComponentD4 = (props) => {
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      {/* props를 전달 */}
      <MyComponentD2 title="React" price="20000">
        첫번째 Child
      </MyComponentD2>
      <MyComponentD3 title="SpringBoot" price={50000}>
        <b>두번째 자식</b>
      </MyComponentD3>
    </div>
  );
};

//선언적 함수
function MyComponentD(props) {
  const arr = ["HTML", "CSS", "JavaScript", "React"];
  const bookPrice = 30000;
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      {/* props를 전달 */}
      <MyComponentD2 title="React" price="20000" subject={arr}>
        첫번째 Child
      </MyComponentD2>
      <MyComponentD3 title="SpringBoot" price={bookPrice} subject={arr}>
        <b>두번째 자식</b>
      </MyComponentD3>
    </div>
  );
}

class MyComponentD3 extends Component {
  constructor(props) {
    super(props); //부모를 반드시 불러야 함. 생성자는 생략이 가능하나, 명시했을 경우 반드시 코드 전에 부모 생성자를 호출해야함.
    console.log("My component3 생성자" + this.props.title);
    console.log(this.props.price + 12345);
    this.myname = "hyunhyun";
    this.age = 20;
  }

  render() {
    const { title, price, children, subject } = this.props;
    return (
      <div>
        <h2>자식2 컴포넌트</h2>
        <p>children: {children}</p>
        <p>children: {this.props.children}</p>
        <p>title: {this.props.title}</p>
        <p>title: {this.props.price}</p>
        <p>title: {title}</p>
        <p>price: {price}</p>
        <hr />
        {/* 해당 객체에 존재하는 필드에 접근할 경우 this.~ 으로 접근 */}
        <h3>나의 이름은 {this.myname}</h3>
        <h3>나의 나이는 {this.age}</h3>
        <ul>
          {/*subject가 null이면 걸림. null이 아닐 경우만 시행 */}
          {subject && subject.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

function MyComponentD2(props) {
  //비구조화 할당. 객체 내부 속성을 빼서 변수로 만들기
  const { title, price } = props;
  const myname = "hyun";
  const age = 20;
  return (
    <div>
      <h2>자식1 컴포넌트</h2>
      <p>타이틀: {props.title}</p>
      <p>가격: {props.price}</p>
      <p>타이틀: {title}</p>
      <p>가격: {price}</p>
      <h3>나의 이름은 {myname}</h3>
      <h3>나의 나이는 {age}</h3>
    </div>
  );
}

export default MyComponentD;
