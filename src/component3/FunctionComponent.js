import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";

function FunctionComponent(props) {
  const [color, setColor] = useState("red");
  const [message, setMessage] = useState("state 관리 연습");
  const [myStyle, setMyStyle] = useState({
    color: "blue",
    border: "1px solid red",
  });
  const handleColorChange = (arg) => {
    let selectColor = arg.target.innerHTML;
    setColor(selectColor);
    setMyStyle({ color: selectColor, border: `1px solid ${selectColor}` });
  };
  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <h1 style={myStyle}>{message}</h1>
      <button onClick={handleColorChange}>RED</button>
      <button onClick={handleColorChange}>GREEN</button>
      <button onClick={handleColorChange}>BLUE</button>
    </div>
  );
}

export function FunctionComponent2(props) {
  const [member, setMember] = useState({ name: "아무개", age: 30 });
  const inputChanged = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
        <Form.Control
          placeholder="이름을 입력하세요"
          aria-label="name"
          aria-describedby="basic-addon1"
          name="name"
          onChange={inputChanged}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">나이</InputGroup.Text>
        <Form.Control
          placeholder="나이를 입력하세요"
          aria-label="age"
          aria-describedby="basic-addon1"
          name="age"
          onChange={inputChanged}
        />
      </InputGroup>
      <h1>
        입력정보: 이름:{member.name} 나이:{member.age}
      </h1>
    </div>
  );
}

function FunctionComponent3(props) {
  const [userName, setUserName] = useState("hyunhyun");
  const [sendMessage, setSendMessage] = useState("빨리와~");
  const [memo, setMemo] = useState({ name: userName, message: sendMessage });
  const initMemo = { name: userName, message: sendMessage };
  const [memoList, setMemoList] = useState([
    memo,
    { name: "ddd", message: "ffff" },
  ]);

  const inputChangeHandler = (e) => {
    if (e.target.name === "name") {
      setUserName(e.target.value);
    } else if (e.target.name === "message") {
      setSendMessage(e.target.value);
    }
    setMemo({ ...memo, [e.target.name]: e.target.value }); //set은 비동기. 바로 console.log 진행하기 때문에 set 되기 전의 값이나옴
    console.log(memo);
  };

  const memoAdd = () => {
    setMemoList([...memoList, memo]);
    console.log(memoList);
  };

  const clearListener = () => {
    setUserName("");
    setSendMessage("");
  };

  const arr = [1, 2, 3, 4];
  const arr2 = [10, 20, 30, 40];
  const arr3 = [...arr, ...arr2];
  const arr4 = [arr, arr2];

  return (
    <div>
      <h1>이벤트연습</h1>
      <h2>이름은 {userName}</h2>
      <h2>메시지는 {sendMessage}</h2>
      <input
        type="text"
        placeholder="이름입력"
        value={userName}
        name="name"
        onChange={inputChangeHandler}
      ></input>
      <input
        type="text"
        placeholder="message입력"
        value={sendMessage}
        name="message"
        onChange={inputChangeHandler}
      ></input>
      <p>
        Memo : {memo.name} ... {memo.message}
      </p>
      <Button variant="success" onClick={memoAdd}>
        담기
      </Button>
      <Button variant="primary" onClick={clearListener}>
        지우기
      </Button>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>메세지</th>
          </tr>
        </thead>
        <tbody>
          {memoList.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export { FunctionComponent as default, FunctionComponent3 };
