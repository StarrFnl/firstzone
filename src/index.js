import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { constTest, varTest } from "component2/JSXTest";

import StateClassComponent from "component3/StateClassComponent";
import StateFunctionComponent from "component3/StateFunctionComponent";
import FunctionComponent, {
  FunctionComponent2,
  FunctionComponent3,
} from "component3/FunctionComponent";
import LifeCycleClassComponent from "component3/LifeCycleClassComponent";

const root = ReactDOM.createRoot(document.getElementById("root")); //root는 하나여야 한다.
console.log("상수: " + constTest);
console.log("변수: " + varTest);
const hobbyArr = ["농구", "축구", "볼링", "골프", "공부"];

root.render(
  <>
    <LifeCycleClassComponent></LifeCycleClassComponent>
    {/* <FunctionComponent></FunctionComponent>
    <FunctionComponent2></FunctionComponent2>
    <FunctionComponent3></FunctionComponent3>
    <StateClassComponent></StateClassComponent> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
