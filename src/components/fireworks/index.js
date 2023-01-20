import React, {useState} from "react";

function Fireworks(){
    const[isExploded, setIsExploded] = useState(false)

    return <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={()=>{
            setIsExploded((currState)=>{
                return !currState
            })
        }}>click me</button> 
        {isExploded ? '💥' : '🧨'}
    </div>
}
export default Fireworks