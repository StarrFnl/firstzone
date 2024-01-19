import React, { useState } from "react";

function StateFunctionComponent(props) {
  //Top level 에서만 Hooks를 사욯 가능하다. 일반함수에서는 불가

  const [count, setCount] = useState(0); // count=0과 같은데, 상태를 관리함
  const [message, setInfo] = useState(
    "버튼을 누르면 값이 변경, 화면 자동 변경"
  ); // count=0과 같은데, 상태를 관리함
  const plus = () => {
    setCount(count + 1);
  };
  const btnClick = (e) => {
    let btnText = e.target.innerHTML;
    if (btnText === "+") {
      setCount(count + 1);
      setInfo("ADD");
    } else if (btnText === "-") {
      setCount(count - 1);
      setInfo("SUB");
    }
  };
  const f1 = () => {};
  return (
    <div>
      <h1>StateFunctionComponent Practice</h1>
      <p>
        현재값 {count} -------- 메세지 {message}
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={plus}>+</button>
      <button onClick={btnClick}>+</button>
      <button onClick={btnClick}>-</button>
    </div>
  );
}

export default StateFunctionComponent;
