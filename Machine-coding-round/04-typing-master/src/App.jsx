import React from "react";
import "./style.css";
import useCustomHook from "./component/useCustomHook";

function App() {
 // this is customHook
  const {
    text,
    handleChange,
    timeReamning,
    handleClick,
    wordCount,
    isStart,
    refLink,
  } = useCustomHook(5);
  return (
    <div>
      <h1>How fast do you type ?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isStart}
        ref={refLink}
      />
      <h3>Time Remaining : {timeReamning}</h3>
      <button onClick={handleClick} disabled={isStart}>
        Start
      </button>
      <h1>Word Count : {wordCount}</h1>
    </div>
  );
}

export default App;
