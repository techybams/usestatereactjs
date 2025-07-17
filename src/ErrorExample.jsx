import React, {useState} from "react";
import { Data } from "./Data";

const ErrorExample = () => {
  // const [count, setCount] = useState(0);
  const [people, setPeople] = useState(Data)

    // const handleClick = () => {
    //   setCount(count + 1)

    // }

    const removeItem = () => {}
    const clearAllItems = () => {
      setPeople([])
    }
  return (
    <div>
    
        {/* <h4>You clicked {count} times</h4>
        <button type='button' onClick={handleClick} className="btn"> click me</button>
     */}

    
      
        {people.map((person)=>{
          const {id, name} = person;
          console.log(person)
          return( <div key={id}>
            <h4>{name}</h4>
            <button type="button">remove</button>
          </div>)
        })}
        <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={clearAllItems}>Clear Items</button>
      
      </div>
      
    
  )
}

export default ErrorExample
