import React, { useContext } from "react";
import { ThemeContext } from "./parent";

function ChildA (){
    const { item } = useContext(ThemeContext)
    return(
        <div style={{backgroundColor: item ? '#ed05de' : '#351dd1'}}>
            'It was a concerning development that he could not get out of his mind. He would have many friends throughout his early years and had fond memories of playing with them, but he could not understand how it had all stopped. There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last.'
        </div>
    )
}
export default ChildA