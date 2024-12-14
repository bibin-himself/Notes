// import React, {Component} from "react";

// class ClassComponentExample extends Component{
//     render(){
//         return (
//         <div>
// <h1>Class Component Example1</h1>
// <h1>Class Component Example2</h1>
//         </div>
//         )
//     }
// }

// export default ClassComponentExample;



// import React from 'react'
// import { useEffect } from 'react';

// function InterviewSnips({numbers}) {

//     useEffect(() => {
//         console.log('Component mounted');
        
//         return () => {
//           console.log('Component will unmount');
//         };
//       }, []); // The empty dependency array ensures this effect only runs on mount and unmount
    

//   return (
//     <div>
//       <ul>{
//         numbers.map((number) => (
//             <li key={number}>{number}</li>
//         ))
//         }</ul>
//     </div>
//   )
// }


import React, { useEffect, useReducer, useState } from 'react';

const initialState = {count: 0, text:""};

const redcer = (state, action) => {
  switch(action.type){
    case 'inc':
      return{...state, count: state.count + 1 };
    case 'dec':
      return {...state, count: state.count - 1 };
    case 'rst':
    return {...state, count: state.count * 0};
    case 'updtText':
      return {...state, text: action.payload}
    default:
      throw new Error();
  }
}



function InterviewSnips() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [state, dispatch] = useReducer(redcer, initialState);
  const [inputText, setInputText] = useState(""); // To hold the input text

  const addBtn = () => {
    dispatch({type: 'inc'});
  };

  const subBtn = () => {
    dispatch({type: 'dec'})
  };

  const rstBtn = () => {
    dispatch({type: 'rst'});
   
  };

  const textBtn = () => {
    dispatch({type: 'updtText', payload: inputText});
   
  };

  const fetchData = async () => {

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if(!response.ok){
        throw new Error("Somethings wrong");
      }

      const result = await response.json();
      setData(result);

    } catch (error) {
      setError(error.message);
    }

    setLoading(false);

  }

  useEffect(() => {
    fetchData()
  }, [])
  
 

  return (
    <div>

<h1>{state.count}</h1>
<button onClick={addBtn}>Add</button>
<button onClick={subBtn}>Sub</button>
<button onClick={rstBtn}>reset</button>


<h2>Text: {state.text}</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update the inputText state
        placeholder="Enter text here"
      />
      <button onClick={textBtn}>Update Text</button>
    
    {error && <p>Error: {error}</p>}
    {data ? (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    ) : (
      loading && <p>Data Fetching.... Please Wait.</p>
    )}
  </div>
  )
}



export default InterviewSnips



