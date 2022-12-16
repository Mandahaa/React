import React, { useContext } from "react";
import { SampleContext } from "./App";
function SomeLabel(){
    const {name} = useContext(SampleContext)
    return(
        <div>
            {name.firstName}
            {name.lastName}
        </div>
    )
}
export default SomeLabel