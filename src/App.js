import React from "react";
import { useState,useEffect } from "react";
import "./styles.css";

const App = () =>{

  const [age, setAge] = useState(0)
  const handleClick = () => setAge(age + 1)

  useEffect(() => {
    document.title = 'You are ' + age + ' years old!'
  })

  useEffect(() => {
    const clicked = () => console.log('window clicked')
    window.addEventListener('click', clicked)

    /* this is  a clean-up function we
     can return to perform required operation*/
    return () => {
      window.removeEventListener('click', clicked)
      console.log('window cleaned');
    }
  }, [])

  /*1.to render useEffect() on mount only we need to pass 
   empty array to useEffect like above.
   2.if you want to call every time you need to pass 
   array values it renders based on array value.
   3.Without an array dependency, 
   the effect function will be run after every single render.
   */

  return <div>
    <p>Current Age value is {age} </p>
    <button onClick={handleClick}>Update Title!! </button>
  </div>
}

export default App;
