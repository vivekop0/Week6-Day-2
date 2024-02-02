/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import axios from "axios"

// import './App.css'

// function App() {
//   const [todos,setTodos]=useState([])
//   useState(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(response){
//       console.log(response.data.todos)
//       setTodos(response.data.todos)
//     })
//   },[])

//   return (
//     <>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </>
//   );
// }



// function Todo(props){
//   return <div>
//     <h1>{props.title}</h1>
//     <h5>{props.description}</h5>
//   </div>
// }
// export default App

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const[id,setId]=useState(1)
  // function handleClick(e) {
  //   const ID =parseInt(e.target.textContent)
  //    setId(ID)
   
  // }

  return (
    <div>
      <button onClick={()=>{
        setId(1)
      }}>1</button>
      <button onClick={()=>{
        setId(2)
      }} >2</button>
      <button onClick={()=>{
        setId(3)
      }} >3</button>
      <button onClick={()=>{
        setId(4)
      }}>4</button>
      <Todo id={id} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState({});
  
  const getTodos = async () => {
    const res = await axios.get('https://sum-server.100xdevs.com/todo?id=' + id);
    console.log(res.data.todo);
    setTodos(res.data.todo);
  };

  useEffect(() => {
    getTodos();
  }, [ id]);

  return (
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  );
}
