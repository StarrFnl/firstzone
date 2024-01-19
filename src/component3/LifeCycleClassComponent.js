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
    return (
      <div>
        <h1>LifeCycleClassComponent 연습</h1>
      </div>
    );
  }
}

LifeCycleClassComponent.propTypes = {};

export default LifeCycleClassComponent;
