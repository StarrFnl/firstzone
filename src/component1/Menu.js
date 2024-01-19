import React from "react";

export const score = 100;

function Menu(props) {
  console.log("Menu Function Component임");
  return (
    <div>
      <header>
        우리가 배운<br></br> Front 과목{" "}
      </header>
      <nav>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
