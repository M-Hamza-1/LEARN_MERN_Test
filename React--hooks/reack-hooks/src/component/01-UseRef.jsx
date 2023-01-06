import React, { useState  , useRef , useEffect} from "react";

function UseRef() {
    const [name , setName] = React.useState("");
    // const [countRender , setRender] =useState(0);
       const countRender = useRef(0);
        /*
         use ref return the object 
         it has the property current
         {
          current : 0 // for our initial value
         }
         .2=> it store the prv state of value
          3=> its not rerender like others hooks while change occures but despite that use ref store the value
          4.=> basically its use for targeting the dom elments 
              eg : <h1 ref ={variable name}>Hello</h1> 
        */
        
      countRender.current = countRender.current+1;
  
  return (
    <div>
   <input type="text" className="name" value={name}  onChange ={(e) => setName(() => e.target.value)} />
   <h1>my name is {name}</h1>
   <div className="renderCounter">Elem rendering :{countRender.current}</div>

    </div>
  )
}

export default UseRef