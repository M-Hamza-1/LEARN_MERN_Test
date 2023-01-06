import React ,{useState , useEffect , useRef} from 'react'

export default function Useref2() {
    const domElm = useRef();
   
   function handleSubmit(e){
     e.preventDefault();
     console.log(domElm.current); // now domElm.current pointing to the domElm.current
     console.log(domElm.current.value); // we don't need to add the onChange here because with domElm.current.value we are targeting the change as well in input box
   }
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        {/* now domElm pointing to the input elm also hanle all property of that */}
        <input type="text" ref={domElm} />
        <button>submit</button>
      </form>
    </div>
  );
}
