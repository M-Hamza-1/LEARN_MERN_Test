import React ,{useState} from 'react'
import "./App.css"
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import questions from './component/Question'
import DarkMode from './component/DarkMode';
function App() {
  const [data ,setData] = useState(questions);
  const [isClick , setIsClicked] = useState(null);
   const [mode , setMode] = useState(true);
  function handleClick(id){
    if(isClick ===id){
      setIsClicked(() =>null);
    }
    else{
      setIsClicked(() => id)
    }
  }


  function colorToggller(){
    setMode(prv => !prv);
  }
  return (
    <div className={`section ${mode ? 'section--bg--dark' : ""}`} >
      <div className={`section--center ${mode ? "section--dark" : " "}`}>
        <DarkMode mode={mode} colorToggller={colorToggller}></DarkMode>
        <h2>Questions And Answers About Login</h2>
        {data &&
          data.map((item, index) => {
            return (
              <article
                className={`content ${mode ? "content--dark" : " "}`}
                key={item.id}
              >
                <div className="content-question">
                  <h3 className="question">{item.title}</h3>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`content--btn  ${mode ? "btn--dark" : " "}`}
                  >
                    {item.id === isClick ? (
                      <AiOutlineCaretUp />
                    ) : (
                      <AiOutlineCaretDown />
                    )}
                  </button>
                </div>
                {isClick === item.id && <p className="answer">{item.info}</p>}
              </article>
            );
          })}
      </div>
    </div>
  );
}

export default App