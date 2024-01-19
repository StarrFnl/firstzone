import React from "react";

function Header(props) {
  console.log("여기는 Header Function임");
  return (
    //js xml문법만 가능
    <div>
      <header>
        <h1>반갑습니다....</h1>
        <h2>React배우기전 선수지식은?</h2>
      </header>
    </div>
  );
}

//하나의 파일에 컴포넌트 여러개. 이 경우 export써줘야함
export function Header2(props) {
  console.log("여기는 Header Function임(2)");
  return (
    //js xml문법만 가능
    <div>
      <header>
        <h1>반갑다....</h1>
        <h2>React Gosu?</h2>
      </header>
    </div>
  );
}

export default Header;
