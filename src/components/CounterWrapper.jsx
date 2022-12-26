import React from "react";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <div className="numbers">
        <Counter number={20} title=" of experience" />
        <Counter number={17} title="Area explored" />
        <Counter number={14} title="K+ Product sold" />
        <Counter number={97} title="Happy Coustumer" />
      </div>
    </div>
  );
}