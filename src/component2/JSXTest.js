import React from "react";

function MyComponentA(props) {
  var score = 90;
  var a = null;
  var b = false;
  var c = undefined;
  console.log(false && "hello");
  console.log("bye" && "hello");
  console.log(null && "hello");
  console.log(undefined && "hello");
  console.log("" && "hello");
  console.log(0 && "hello");
  console.log(1 && "hello");

  //환경변수 읽기
  console.log("public 경로: " + process.env.PUBLIC_URL);
  console.log("My name: " + process.env.REACT_APP_MYNAME);
  console.log("My email: " + process.env.REACT_APP_MY_EMAIL);
  console.log("My address: " + process.env.MY_ADDRESS);

  return (
    <>
      <h1>JSX문법 익히기</h1>
      <div>
        <p>1. Root 1개이어야 한다.</p>
        <p>2. 자바스크립트 표현식 중괄호로 감싸기 점수는 {score} </p>
        <p>3. 빈 tag는 fragment라고 한다</p>
        <p>4. 삼항연산자 : {score >= 90 ? <b>합격</b> : <b>불합</b>}</p>
        <p>5. 조건부렌더링 : {score >= 90 && "합격"}</p>
        {/* 조건에 맞으면 렌더링 */}
        <p>
          6. null, false, undefined: {a} {b} {c} 출력되지 않는다
        </p>
      </div>
      {/* div 없이 쓰면 fragment. root 하나여야 하기 때문에 이런 방식으로 감쌀 수 있음 */}
    </>
  );
}

export function MyComponentB(props) {
  const hobbyArr = ["농구", "축구", "볼링", "골프", "공부"];
  const arr2 = hobbyArr.map((item, idx) => <li key={idx}>{item}</li>);
  for (let i = 0; i < hobbyArr.length; i++) {
    console.log(hobbyArr[i]);
  }

  function f(item, idx) {
    // jsx 문법
    return <li key={idx}>{item}</li>;
  }

  const hobbyArr2 = hobbyArr.map(f);
  console.log(arr2);
  return (
    <div>
      <h1>나의 취미</h1>
      <ul>
        {hobbyArr.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <ul>
        {hobbyArr2}
        {f("신한DS", "A100")}
        {/* 실제 Key가 들어가는 것은 아니고, 리액트가 DOM 찾기 위해 내부적으로 사용하는 것이 KEY */}
      </ul>
      <hr></hr>
      {hobbyArr.map(f)}
      {hobbyArr.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
      {arr2}
    </div>
  );
}

export const constTest = 100;
export var varTest = 200;
export function FuncTest1() {
  return <p>funcTest1</p>;
}
export function FuncTest2() {
  return <p>funcTest2</p>;
}
export const FuncTest3 = () => {
  return <p>funcTest3</p>;
};

export default MyComponentA;
