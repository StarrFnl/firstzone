import React from "react";
import Header, { Header2 } from "component1/Header"; //Header2는 default가 아니라서 {}내부에 사용
import Menu, { score } from "component1/Menu";
import Content, { MyFunc } from "component1/Content";

function ComponentTest(props) {
  console.log(score + "점");
  return (
    <div>
      <Header></Header>
      <Header2></Header2>
      <Menu></Menu>
      <Content></Content>
      <MyFunc></MyFunc>
    </div>
  );
}

export default ComponentTest;
