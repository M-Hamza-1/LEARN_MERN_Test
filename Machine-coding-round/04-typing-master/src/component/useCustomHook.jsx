import { useState, useEffect } from "react";
// this is a custom Hook
function useCustomHook() {
  const [text, setText] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timeReamning, setTimereaming] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordCounter(mytext) {
    const wordArr = mytext.trim().split(" ");
    return wordArr.filter((elm) => elm != "").length;
  }

  function handleClick() {
    setIsStart(true);
    setText("");
    setTimereaming(5);
  }

  function endGame() {
    setIsStart(false);
    setWordCount(wordCounter(text));
  }

  useEffect(() => {
    if (isStart && timeReamning > 0) {
      setTimeout(() => {
        setTimereaming((prv) => prv - 1);
      }, 1000);
    } else if (timeReamning === 0) {
      endGame();
    }
  }, [isStart, timeReamning]);
  return {
    text,
    handleChange,
    timeReamning,
    handleClick,
    wordCount,
    isStart,
  };
}

export default useCustomHook;
