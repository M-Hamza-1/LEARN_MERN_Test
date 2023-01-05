import React , {useEffect , useState} from "react";
import "./styles.css"

export default function App() {
  const [data , setData] = useState([])
 async function fecthData(){
   let res  = await fetch('https://reqres.in/api/users');
   let newData  = await res.json();
   console.log(newData.data);
   setData(newData.data);
   
 }
useEffect(() =>{
  fecthData()
},[]) 



}