import React from "react";
import ReactDOM from "react-dom";

const fName = "James";
const lName = "Sebastian";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>this is a paragraph</p>
    <p>The number is {num}</p>
    <p>This is a new change</p>
    <p>The second number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
