import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleClassComponent extends Component {
  //   state = { title: "준비", buttonVisible: false }; //밖이면
  constructor(props) {
    super(props);
    this.state = { title: "준비", buttonVisible: false }; //안이면
    console.log("LifeCycleClassComponent...constructor");
  }

  componentWillMount() {
    console.log("LifeCycleClassComponent...componentWillMount");
  }

  componentDidMount() {
    console.log("LifeCycleClassComponent...componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("LifeCycleClassComponent...componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleClassComponent...shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("LifeCycleClassComponent...componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycleClassComponent...componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("LifeCycleClassComponent...componentWillUnmount (제거)");
  }

  render() {
    const { title, buttonVisible } = this.state;
    return (
      <div>
        <h1>LifeCycleClassComponent 연습: {title}</h1>
        <button
          onClick={() =>
            this.setState({ title: "보이기", buttonVisible: true })
          }
        >
          자식 컴포넌트 보이기
        </button>
        {buttonVisible && (
          <div>
            <LifeCycleClassComponent2>{title}</LifeCycleClassComponent2>
            <button
              onClick={() =>
                this.setState({ title: "준비", buttonVisible: false })
              }
            >
              제거
            </button>
          </div>
        )}
      </div>
    );
  }
}

class LifeCycleClassComponent2 extends Component {
  //   state = { title: "준비", buttonVisible: false }; //밖이면
  constructor(props) {
    super(props);
    console.log("자식 LifeCycleClassComponent...constructor");
  }

  componentWillMount() {
    console.log("자식 LifeCycleClassComponent...componentWillMount");
  }

  componentDidMount() {
    console.log("자식 LifeCycleClassComponent...componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("자식 LifeCycleClassComponent...componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("자식 LifeCycleClassComponent...shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("자식 LifeCycleClassComponent...componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("자식 LifeCycleClassComponent...componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("자식 LifeCycleClassComponent...componentWillUnmount (제거)");
  }

  render() {
    console.log("자식 LifeCycleClassComponent...render");
    return (
      <div>
        <h1 style={{ backgroundColor: "orange" }}>이 부분은 자식이 출력함</h1>
      </div>
    );
  }
}

LifeCycleClassComponent.propTypes = {};

export default LifeCycleClassComponent;
