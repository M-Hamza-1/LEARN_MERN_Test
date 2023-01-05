import React ,{useState} from 'react'
import "./App.css"
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import questions from './component/Question'
function App() {
  const [data ,setData] = useState(questions);
  const [isClick , setIsClicked] = useState(null);

  function handleClick(id){
    if(isClick ===id){
      setIsClicked(() =>null);
    }
    else{
      setIsClicked(() => id)
    }
  }
  return (
    <div className="section">
      <div className="section--center">
           <h3 style={{fontSize : "17px", margin : "1px"}}>Day 89 #100DaysofCode</h3> 
        <h2>Questions And Answers About Login</h2>
       {data && data.map((item , index) =>{
         return (
           <article className="content" key={item.id}>
             <div className="content-question">
               <h3 className="question">{item.title}</h3>
               <button
                 onClick={() => handleClick(item.id)}
                 className="content--btn"
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