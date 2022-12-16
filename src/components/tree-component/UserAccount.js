import React, { useContext } from "react";
import { SampleContext } from "./App";

function UserAccount(){
    const {name} = useContext(SampleContext)
    return(
        <div>
            {name.firstName}
            {name.lastName}
        </div>
    )
}
export default UserAccount