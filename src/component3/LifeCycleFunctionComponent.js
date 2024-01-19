import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LifeCycleFunctionComponent(props) {
  const [member, setMember] = useState({}); //멤버가 객체

  useEffect(() => {
    console.log("component가 rendering될 때마다 수행됨");
  });
  useEffect(() => {
    console.log("component가 최초 rendering될 때만 1회 수행됨");
  }, []); //의존배열?
  useEffect(() => {
    console.log(
      "component가 최초 rendering될 때 1회, member가 변경될 때마다 수행됨"
    );
  }, [member]);
  return (
    <div>
      <h1>LifeCycleFunctionComponent 연습</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
}

export default LifeCycleFunctionComponent;
