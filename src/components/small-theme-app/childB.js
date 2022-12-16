import React, { useContext } from "react";
import { ThemeContext } from "./parent";

function ChildB(){
    const {setItem} = useContext(ThemeContext)
    return(
        <div>
            <button onClick={()=>{setItem(currState=> !currState)}}> switch background
            </button>
        </div>
    )
}
export default ChildB