import React from "react";
import "component2/My.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

// React에서 CSS 사용
// 외부 CSS 1) import, 2) className 속성을 이용
// 내부 CSS(inline) => 반드시 객체일 것. {}, style={{}}

function CSSTest(props) {
  const inlineStyle = {
    border: "3px dotted blue",
    color: "orange",
    fontSize: "30px",
    // object로 넣어야 함
  };
  return (
    // css 넣을 때 중괄호 2개. 바깥은 jsx, 안쪽은 object의 중괄호
    <header style={{ border: "1px solid gray" }}>
      {/* class 줄 때 className으로 줘야 함. JS의 class 예약어와 충돌나기 때문 */}
      <h1 className="myStyle">반갑습니다....</h1>
      <h2 className="myStyle2">React배우기전 선수지식은?</h2>
      <p style={inlineStyle}>Style연습..inline</p>
      <p style={inlineStyle} className="myStyle2">
        Style연습...class이름
      </p>
      <Badge bg="secondary" as={Button}>
        New
      </Badge>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button>button</Button>
    </header>
  );
}

export default CSSTest;
