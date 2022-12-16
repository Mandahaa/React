import React, {useState} from "react";

function Fireworks(){
    const[isExploded, setIsExploded] = useState(false)

    return <div>
        <button onClick={()=>{
            setIsExploded((currState)=>{
                return !currState
            })
        }}>click me</button> 
        {isExploded ? '💥' : '🧨'}
    </div>
}
export default Fireworks