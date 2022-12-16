import React, {useState} from "react";


function Counter (){
    const [count, setCount]=useState(0)

    return <div>test
        <button onClick={() => {
            setCount((currCount)=>{
                return currCount+1
            })
        }}>increment</button>
        {count}
        <button onClick={()=>{
            setCount((currCount)=>{
                return currCount-1
            })
        }}>decrement</button>
    </div>
    
}
export default Counter